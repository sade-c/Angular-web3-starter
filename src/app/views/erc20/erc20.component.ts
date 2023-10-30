import { Component, OnInit } from '@angular/core';
import { Erc20Service } from 'src/app/contracts/erc20.service';
import { IMetadata } from 'src/app/shared/components/erc20-metadata/metadata.interface';
import { WalletProviderService } from 'src/app/shared/providers/wallet-provider.service';
import { ERC20ApproveComponent } from '../../shared/components/erc20-approve/erc20-approve.component';
import { ERC20TransferFromComponent } from '../../shared/components/erc20-transfer-from/erc20-transfer-from.component';
import { ERC20TransferComponent } from '../../shared/components/erc20-transfer/erc20-transfer.component';
import { ERC20AllowanceComponent } from '../../shared/components/erc20-allowance/erc20-allowance.component';
import { ERC20MetadataComponent } from '../../shared/components/erc20-metadata/erc20-metadata.component';
import { ERC20BalanceComponent } from '../../shared/components/erc20-balance/erc20-balance.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-erc20',
    templateUrl: './erc20.component.html',
    styleUrls: ['./erc20.component.scss'],
    standalone: true,
    imports: [ButtonModule, RippleModule, ERC20BalanceComponent, ERC20MetadataComponent, ERC20AllowanceComponent, ERC20TransferComponent, ERC20TransferFromComponent, ERC20ApproveComponent]
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
    this.userAccountAddress = this._web3Service
    .getUserAccountAddressSubject()
     
  }
  onApproveClicked(){
    this.userAccountAddress = this._web3Service
    .getUserAccountAddressSubject()
     
    
  }

  onMetadataRead(event: IMetadata) {
    this.metadata[event.property] =
      event.property == 'decimals' ? parseInt(event.value) : event.value;
  }
}
