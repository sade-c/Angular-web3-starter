import { Component, Input, OnDestroy, OnInit } from '@angular/core'; 
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { EventData } from 'web3-eth-contract';
import { Web3Subscription } from '../../model/events/Subscription';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { WalletProviderService } from '../../providers/wallet-provider.service';
 
import { ITransferEvent } from './transfer-event.interface';

@Component({
  selector: 'erc20-transfer-event',
  templateUrl: './erc20-transfer-event.component.html',
  styleUrls: ['./erc20-transfer-event.component.css'],
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

  async ngOnInit(): Promise<void> {
    // const web3 = new Web3(Web3.givenProvider);

    // this.jureba = new web3.eth.Contract(
    //   this.contractERC20.getContractABI(),
    //   environment.KOVAN.LINK_TOKEN
    // );
    // this.jureba.events.Transfer().on('data', (ev: any) => {
    //   console.log('toma evento', ev);
    // });
    // this.jureba
    //   .getPastEvents('Transfer', {
    //     fromBlock: (await web3.eth.getBlockNumber()) - 1000,
    //     toBlock: 'latest',
    //     filter: { from: '0x97b6183621504b18Ccb97D0422c33a5D3601b862' },
    //   })
    //   .then((events: EventData[]) => {
    //     console.log(`toma past da jureba`, events);
    //   });
    /////////
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
          // subscrição eventos últimos 10 blocos
          this.fetchPastTransferEvents(accountAddress);
          // subscrição eventos futuros
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
    // subscrição eventos passados
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
