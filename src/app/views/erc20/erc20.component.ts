import { Component, OnInit } from '@angular/core';
import { Erc20Service } from 'src/app/contracts/erc20.service';
import { IMetadata } from 'src/app/shared/components/erc20-metadata/metadata.interface';
import { WalletProviderService } from 'src/app/shared/providers/wallet-provider.service';

@Component({
  selector: 'app-erc20',
  templateUrl: './erc20.component.html',
  styleUrls: ['./erc20.component.scss']
})
export class Erc20Component implements OnInit {
  userAccountAddress: string ="0x6E0B6FF7536100a9e6b7041CA5a98108935932e5";
  formatedBalance: string = '0';
  formatedBalanceTooltip: string = '0';
  metadata: { [property: string]: any } = {};

  constructor(
    private _web3Service: WalletProviderService,
    public readonly erc20Service: Erc20Service
  ) {}

  ngOnInit(): void {
    // Subscribing for account address changes in the provider
 
  }
  onApproveClicked(){
    this._web3Service
    .getUserAccountAddressSubject()
    .subscribe(async (address) => {
      this.userAccountAddress = address;
    });
    
  }

  onMetadataRead(event: IMetadata) {
    this.metadata[event.property] =
      event.property == 'decimals' ? parseInt(event.value) : event.value;
  }
}
