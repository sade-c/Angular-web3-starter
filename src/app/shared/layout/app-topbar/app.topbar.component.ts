import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppMainComponent } from '../app-main/app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { WalletProviderService } from 'src/app/shared/providers/wallet-provider.service';
import { GlobalAlertService } from 'src/app/shared/global-alert.service';
import { NetworkParams } from 'src/app/shared/providers/network-params.interface';

declare const blockies;
@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit, OnDestroy {
  items?: MenuItem[];
  network: SelectItem[];
  imageDataUrl = '';
  private accountSubscription?: Subscription;
  private networkSubscription?: Subscription;
  private balanceSubscription?: Subscription;
  public account: any;
  connect: string = "Connect Wallet";
  isConected = false;
  balance = 0
  isCorrectNetwork = false;
  selectedNetwork: string = "";
  chainId = 0;
  currentAccount: string = "";
  currentNetwork: NetworkParams;
  constructor(public appMain: AppMainComponent,
    private provider: WalletProviderService,
    private alertService: GlobalAlertService,) {
    this.network = [
      { label: 'network', value: null },
      { label: 'Avalanche Testnet', value: 43113 },
      { label: 'Polygon Testnet', value: 80001 },

    ];
  }


  async ngOnInit() {


    this.setupListeners();
    let isConnected = await this.provider.isConnected();
    console.log('onInit, isConnected = ', isConnected);
    if (isConnected) {
      try {
        this.connect = "Connected";
        this.createBlockie();
        // this.provider.getAccounts()
      } catch (error) {
        console.warn('failed to get accounts: ', error);
        this.connect = "Connect Wallet";
      }
    } else { this.connect = "Connect Wallet"; }
  }
  ngOnDestroy(): void {
    this.accountSubscription?.unsubscribe();
    this.networkSubscription?.unsubscribe();
    this.balanceSubscription?.unsubscribe();
  }
  async onConnectTapped() {

    this.isConected = await this.provider.connect()
    console.log(`onConnectTapped, isConnected = ${this.isConected}`);
    if (this.isConected) {
      this.connect = "Connected";
      this.provider.getAccounts()
      this.createBlockie();
    } else {
      this.alertService.presentNoConnectionAlert();

    }

  }

  async setupListeners() {

    this.networkSubscription = this.provider.networkSubject.subscribe(chainId => {
      if (chainId) {

        this.isCorrectNetwork = chainId.toString(16).toLowerCase() == this.provider.currentNetwork.chainId.toLocaleLowerCase()
        console.log(`Networks: ${chainId} <=> ${this.provider.currentNetwork.chainId}`);
        console.log(`isCorrectNetwork: ${this.isCorrectNetwork}`);
        console.log(`isConnected: ${this.provider.isConnected()}`);
        console.log(`currentAccount: ${this.provider.currentAccount}`);
        this.currentAccount = this.provider.currentAccount;
        this.currentNetwork = this.provider.currentNetwork;
        console.log(`MaskNetwork: ${this.provider.currentNetwork.chainId}`);
        this.selectedNetwork = this.currentNetwork.chainId;
      }
    })

  }
  async switchNetwork() {
    await this.provider.addNetwork()
  }
  private createBlockie() {
    var blockie = blockies.create({
      seed: this.account,
      size: 8,
      scale: 2
    })
    this.imageDataUrl = blockie.toDataURL()
  }

}
