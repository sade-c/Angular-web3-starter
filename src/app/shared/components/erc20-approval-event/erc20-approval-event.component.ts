import { Component, Input, OnDestroy, OnInit } from '@angular/core';
 
import { EventData } from 'web3-eth-contract';
import { Web3Subscription } from '../../model/events/Subscription';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { WalletProviderService } from '../../providers/wallet-provider.service';
 
import { IApprovalEvent } from './approval-event.interface';

@Component({
  selector: 'erc20-approval-event',
  templateUrl: './erc20-approval-event.component.html',
  styleUrls: ['./erc20-approval-event.component.css'],
})
export class ERC20ApprovalEventComponent implements OnInit, OnDestroy {
  @Input() contractERC20!: ERC20BaseContract;

  eventPastSubscription!: Web3Subscription;
  eventSubscription!: Web3Subscription;
  eventList: IApprovalEvent[] = [];

  displayedColumns  = [
    { propertyName: 'blockNumber', headerTitle: '# Block' },
    { propertyName: 'owner', headerTitle: 'Owner' },
    { propertyName: 'spender', headerTitle: 'Spender' },
    { propertyName: 'value', headerTitle: '$' },
  ];

  constructor(private _web3Service: WalletProviderService) {}

  async ngOnInit(): Promise<void> {
    this._web3Service
      .getUserAccountAddressSubject()
      .subscribe(async (accountAddress) => {
        //se existe uma subscrição, encerra-a
        if (this.eventSubscription) {
          this.eventSubscription.unsubscribe();
        }
        //Se a conta não for nula, cria uma nova subscrição filtrando por eventos `Approval`
        // que tenha a conta `from` igual à conta conectada na Wallet
        if (accountAddress) {
          // subscrição eventos últimos 10 blocos
          this.fetchPastApprovalEvents(accountAddress);
          // subscrição eventos futuros
          this.eventSubscription =
            await this.contractERC20.getWeb3EventSubscription({
              eventName: 'Approval',
              web3jsParameters: {
                filter: { owner: accountAddress },
              },
            });

          this.eventSubscription.on('data', (event: EventData) => {
            console.log('subscr evento approval', event.returnValues);
            this.eventList = [
              ...this.eventList,
              {
                blockNumber: event.blockNumber,
                owner: event.returnValues['owner'],
                spender: event.returnValues['spender'],
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
   * @param accountAddress Account address used to filter the events where 'owner' part equals it
   */
  private async fetchPastApprovalEvents(accountAddress: string): Promise<void> {
    const currentBlock = await this._web3Service.getCurrentBlockNumber();
    // subscrição eventos passados
    const pastEvents = await this.contractERC20.getWeb3PastEventSubscription({
      eventName: 'Approval',
      web3jsParameters: {
        filter: { owner: accountAddress },
        fromBlock: currentBlock - 1000,
        toBlock: 'latest',
      },
    });

    const tempArray = [];
    for (const e of pastEvents) {
      tempArray.push({
        blockNumber: e.blockNumber,
        owner: e.returnValues['owner'],
        spender: e.returnValues['spender'],
        value: e.returnValues['value'],
      });
    }
    this.eventList = [...this.eventList, ...tempArray];
  }
}
