import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { GreeterService } from 'src/app/contracts/greeter.service';
import { WalletProviderService } from 'src/app/shared/providers/wallet-provider.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent {
  gform = new UntypedFormGroup({
    saysame: new UntypedFormControl(''),

  });
  greet: string;
  constructor(private wallet: WalletProviderService,
    private greeterService: GreeterService) { }

  async greetMe() {
    this.greet = await this.greeterService.greet();
    console.log(this.greet);
  }

  async onApproveClicked() {
    console.log('onApproveClicked');
    await this.greeterService.setGreeting(this.gform.value.saysame);

  }

}
