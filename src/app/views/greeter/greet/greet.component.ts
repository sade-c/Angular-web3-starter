import { ChangeDetectorRef, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { GreeterService } from 'src/app/contracts/greeter.service';
import { GlobalAlertService } from 'src/app/shared/global-alert.service';
import { TransactionResult } from 'src/app/shared/model';
import { WalletProviderService } from 'src/app/shared/providers/wallet-provider.service';
import { AbiItem } from 'web3-utils';
import IERC20 from "../../../artifacts/ERC20.json"
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent {
  ERC20;
  
  gform = new UntypedFormGroup({
    saysame: new UntypedFormControl(''),

  });
  greet: string;
  constructor(private wallet: WalletProviderService,
    private greeterService: GreeterService,
    private _messageService: GlobalAlertService
  ) { 
    this.ERC20=this.getContractABI();
  }

  getContractABI(): AbiItem[] {
    return IERC20.abi as AbiItem[];
}
  async greetMe() {
    this.greet = await this.greeterService.greet();
    console.log(this.greet);
  }

  async onApproveClicked() {
    console.log('onApproveClicked');
    //    await this.greeterService.setGreeting(this.gform.value.saysame);
    await this.greeterService.finalSetGreetings(this.gform.value.saysame)
      .subscribe((transactionResult) => {
        if (transactionResult.success) {
          this._messageService.showMessageAlert("info", transactionResult.result);
        } else { this._messageService.showMessageAlert("error", transactionResult.result); }
      });

  }



  /*   private async finalizeCallback(confirmationResult: TransactionResult<string>) {
  
      this._changeDetectorRefs.detectChanges();
      if (confirmationResult.success == false) {
        this._messageService.showMessageAlert("dede", confirmationResult.result);
      }
    } */


}
