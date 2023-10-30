import { ErrorHandler, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WalletProviderService } from './providers/wallet-provider.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { ProviderErrors } from './model/eip1193/providerErrors';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable({
  providedIn: 'root',
   
})
export class GlobalAlertService implements ErrorHandler {
   private messageService=inject (MessageService);  
/*   private provider=inject (WalletProviderService); */
  constructor(

 
    private router: Router  
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
    console.log("sade ce de");

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
    console.log("error",error);
    this.messageService.add({
      severity: 'error',
      summary: error.title,
      detail: error.message
    });


  }



  async showToast(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });


  }

  handleError(err: any): void {
 
    
      if( err instanceof Error){
        let error = err.toString();
        const index = error.indexOf("code")+6;
        const result = error.substring(index, index + 4);
 
        
       
        if (!isNaN(Number(result))) {
          this.showProviderAlert(result); 
        } else {
          console.log("error type Error",err);
        }
     
      }
      if( err instanceof TypeError){
        console.log("error type TypeError");
      }
      if( err instanceof HttpErrorResponse){
        console.log("error type HttpErrorResponse");
      }


   
 /*    if (err["code"]) {
      this.showProviderAlert(err.code)
    } else {
      this.showErrorAlert(err)
    } */

   
  }

 /*  async connect() {
    let isConected = await this.provider.connect()
    console.log('connect clicked with result: ', isConected)
    if (isConected) {
      this.provider.getAccounts()
    } else {
      this.presentNoConnectionAlert()
    }
  } */

}
