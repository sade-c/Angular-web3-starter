import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WalletProviderService } from './providers/wallet-provider.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { ProviderErrors } from './model/eip1193/providerErrors';

@Injectable({
  providedIn: 'root'
})
export class GlobalAlertService {

  constructor(

    private messageService: MessageService,
    private provider: WalletProviderService,
    private router: Router,
  ) { }

  async presentNoConnectionAlert() {

    this.messageService.add({
      severity: 'error',
      summary: 'No Connection',
      detail: 'No Web3 wallet was detected. To continue please install Metamask or another Web3 compatible wallet.'
    });

  }

  async showConnectAlert() {
    this.messageService.add({
      severity: 'error',
      summary: 'Connect!',
      detail: 'Please connect your wallet to proceed.'
    });

  }

  async showMessageAlert(title: string, message: string, severity: string = 'success') {
    this.messageService.add({
      severity: severity,
      summary: title,
      detail: message
    });

  }

  async showErrorAlert(error: Error) {
    const anyError = (error as any)
    this.messageService.add({
      severity: 'error',
      summary: 'An Error Occured',
      detail: (anyError.data && anyError.data.message) ? anyError.data.message : anyError.message,
    });


  }
  async showProviderAlert(errorcode: string) {
    let error = ProviderErrors[errorcode]
    this.messageService.add({
      severity: 'error',
      summary: error.title,
      detail: error.message
    });


  }



  async showToast(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'An Error Occured',
      detail: message,
    });


  }

  async connect() {
    let isConected = await this.provider.connect()
    console.log('connect clicked with result: ', isConected)
    if (isConected) {
      this.provider.getAccounts()
    } else {
      this.presentNoConnectionAlert()
    }
  }

}
