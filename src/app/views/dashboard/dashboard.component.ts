import { Component, OnInit } from '@angular/core';

import { GlobalAlertService } from 'src/app/shared/global-alert.service';
import { AppConfig } from 'src/app/shared/layout/appconfig';
import { ConfigService } from 'src/app/shared/layout/service/app.config.service';

@Component({
  templateUrl: './dashboard.component.html',
  providers: []
})
export class DashboardComponent implements OnInit {
  config!: AppConfig;

  constructor(public configService: ConfigService, public GlobalAlertService: GlobalAlertService) { }

  ngOnInit() {
    this.config = this.configService.config;

  }
  dene() {
    this.GlobalAlertService.connect();
    console.log('dene');
  }

  code1: string = `export class GreeterService {

    greeterContract: any

    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient) {
        this.greeterContract = new ethers.Contract(
            wallet.currentConfig.contracts.Greeter,
            Greeter.abi,
            provider.provider
        );
    }



    async greet() {
        let greet = await this.greeterContract.greet();
        return greet;
    }
    async setGreeting(greeting: string) {
        let greet = this.greeterContract.connect(this.wallet.signer).setGreeting(greeting)
            .then(() =&gt; { })
            .catch((err) =&gt; {
                if (err.code == 4001) {

                    console.error(&quot;error&quot;, ProviderErrors[err.code].title);
                }
            });


        return greet;
    }
}`;

  code2: string = ``;

}
