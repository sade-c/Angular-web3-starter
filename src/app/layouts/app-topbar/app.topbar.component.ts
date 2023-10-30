import { Component, OnDestroy, OnInit, WritableSignal, effect, inject, signal, untracked } from '@angular/core';
import { AppMainComponent } from '../app-main/app.main.component';
 
import { MenuItem, MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
 
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { GlobalAlertService } from 'src/app/web3/global-alert.service';
import { ShortAddressPipe } from 'src/app/web3/pipes/short-address.pipe';
import { NetworkParams } from 'src/app/web3/providers/network-params.interface';
import { WalletProviderService } from 'src/app/web3/providers/wallet-provider.service';
import { Subscription } from 'rxjs';
import { MenuService } from '../service/app.menu.service';

declare const blockies;
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: true,
    imports: [
        RouterLink,
        ButtonModule,
        NgClass,
        AvatarModule,
        ChipModule,
        ShortAddressPipe, AppMainComponent
    ],
})
export class AppTopBarComponent   implements OnInit    {
  items?: MenuItem[];
  private provider = inject(WalletProviderService);
	private alertService = inject(GlobalAlertService);
	private messageService = inject(MessageService);
	private networkSubscription?: Subscription;
	isCorrectNetwork = false;
	currentAccount: WritableSignal<string>= signal("");
	currentNetwork: NetworkParams;
	selectedNetwork: string = "";
	isConected: boolean;

	connect: WritableSignal<string> = signal("Connect Wallet");

	public account: any;
	imageDataUrl = "https://source.unsplash.com/40x40/?portrait?1";
	constructor(private menuService: MenuService,public  appMain:AppMainComponent) {
 
		effect(() => {
			this.provider.connectedSignal();
			
			untracked(() => {
			  if (this.provider.connectedSignal()) { 
				this.provider.getAccounts();
				this.connect.set("Connected"); 
				this.currentAccount.set(this.provider.currentAccount);
				this.createBlockie();
				this.isConected = true;
				
			};
			});
	  
		  });
	}


	async ngOnInit() {
 
		this.setupListeners();

	}

 
 
	async onConnectTapped() {



		this.isConected = await this.provider.connect()
		if (this.isConected) {

			this.provider.getAccounts()
		 


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

				this.currentNetwork = this.provider.currentNetwork;
				console.log(`MaskNetwork: ${this.provider.currentNetwork.chainId}`);
				this.selectedNetwork = this.currentNetwork.chainId;
				if(!this.isCorrectNetwork){
					this.messageService.add({severity:'error', summary: 'Error', detail: 'Please connect to the correct network'});
				}
			}

		})
 

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
