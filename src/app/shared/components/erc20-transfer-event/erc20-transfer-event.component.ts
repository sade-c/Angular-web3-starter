import { Component, Input, OnDestroy, OnInit } from '@angular/core'; 
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { EventData } from 'web3-eth-contract';
import { Web3Subscription } from '../../model/events/Subscription';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { WalletProviderService } from '../../providers/wallet-provider.service';
 
import { ITransferEvent } from './transfer-event.interface';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'erc20-transfer-event',
    templateUrl: './erc20-transfer-event.component.html',
    styleUrls: ['./erc20-transfer-event.component.css'],
    standalone: true,
    imports: [
        ButtonModule,
        RippleModule,
        TableModule,
        SharedModule,
    ],
})
export class ERC20TransferEventComponent implements OnInit, OnDestroy {
  @Input() contractERC20!: ERC20BaseContract;

  eventPastSubscription!: Web3Subscription;
  eventSubscription!: Web3Subscription;
  eventList: ITransferEvent[] = [];

  displayedColumns  = [
    { propertyName: 'blockNumber', headerTitle: '# Block' },
    { propertyName: 'from', headerTitle: 'From Account' },
    { propertyName: 'to', headerTitle: 'To Account' },
    { propertyName: 'value', headerTitle: '$' },
  ];

  constructor(private _web3Service: WalletProviderService) {}

  jureba: any;
  async ngOnInit(): Promise<void> {}
  async transferEvent(): Promise<void> {
    
    this._web3Service
      .getUserAccountAddressSubject()
      .subscribe(async (accountAddress) => {
        //se existe uma subscrição, encerra-a
        if (this.eventSubscription) {
          this.eventSubscription.unsubscribe();
        }
        //Se a conta não for nula, cria uma nova subscrição filtrando por eventos `Transfer`
        // que tenha a conta `from` igual à conta conectada na Wallet
        if (accountAddress) {
      
          this.fetchPastTransferEvents(accountAddress);
        
          this.eventSubscription =
            await this.contractERC20.getWeb3EventSubscription({
              eventName: 'Transfer',
              web3jsParameters: {
                filter: { from: accountAddress },
              },
            });

          this.eventSubscription.on('data', (event: EventData) => {
            console.log('subscr evento Transfer', event.returnValues);
            this.eventList = [
              ...this.eventList,
              {
                blockNumber: event.blockNumber,
                from: event.returnValues['from'],
                to: event.returnValues['to'],
                value: event.returnValues['value'],
              },
            ];
          });
          this.eventSubscription.on('error', (error) => {
            alert(error);
          });
        }
      });
      console.log("event list",this.eventList);
  }

  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

  /**
   * Fetches the past events on the blockchain since current block less 10 and feed the {pastEvents} array
   *
   * @param accountAddress Account address used to filter the events where 'from' part equals it
   */
  private async fetchPastTransferEvents(accountAddress: string): Promise<void> {
    const currentBlock = await this._web3Service.getCurrentBlockNumber();
    console.log("block number: " + currentBlock);
   
    const pastEvents = await this.contractERC20.getWeb3PastEventSubscription({
      eventName: 'Transfer',
      web3jsParameters: {
        filter: { from: accountAddress },
        fromBlock: currentBlock - 10,
        toBlock: 'latest',
      },
    });

    const tempArray = [];
    for (const e of pastEvents) {
      tempArray.push({
        blockNumber: e.blockNumber,
        from: e.returnValues['from'],
        to: e.returnValues['to'],
        value: e.returnValues['value'],
      });
    }
    this.eventList = [...this.eventList, ...tempArray];
  }
}
