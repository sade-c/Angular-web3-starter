import { ChangeDetectorRef, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GreeterService } from 'src/app/contracts/greeter.service';
 
import { AbiItem } from 'web3-utils';
import IERC20 from "../../artifacts/ERC20.json"
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { GlobalAlertService } from 'src/app/web3/global-alert.service';
import { WalletProviderService } from 'src/app/web3/providers/wallet-provider.service';
import { AppMainComponent } from 'src/app/layouts/app-main/app.main.component';
import { MenuService } from 'src/app/layouts/service/app.menu.service';
import { ConfigService } from 'src/app/layouts/service/app.config.service';
@Component({
    selector: 'app-greet',
    templateUrl: './greet.component.html',
    styleUrls: ['./greet.component.scss'],
    providers: [ConfigService,MenuService],
    standalone: true,
    imports: [ButtonModule, RippleModule, FormsModule, ReactiveFormsModule, InputTextModule,AppMainComponent]
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
