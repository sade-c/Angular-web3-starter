/* import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environments } from 'src/environments/environments';
declare global {
  interface Window {
    ethereum: any;
  }
}
@Injectable({
  providedIn: 'root',
})

export class EnvironmentProviderService {
  environment: any;
  environmentSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.environment = environments[0];
    this.setupListeners();
    this.startApp();
  }

  async startApp() {
    let eth: any = window.ethereum;
    if (eth) {
      const chainId = await eth.request({
        method: 'eth_chainId',
      });
      if (typeof window.ethereum !== 'undefined') {
        const detectedEnvironment = environments.find(
          (item) => item.config.networkParams.chainId.toLowerCase() === chainId
        );
        if (detectedEnvironment) {
          this.loadEnvironment(detectedEnvironment);
          return;
        }
        this.loadSavedEnvironment();
        return;
      }
      this.loadSavedEnvironment();
    }
  }

  async setupListeners() {
    let eth = (window as any).ethereum;

    if (eth) {
      (window as any).ethereum.on('chainChanged', async () => {
        const chainId = await (window as any).ethereum.request({
          method: 'eth_chainId',
        });
        const changedEnvironment = environments.find(
          (item) => item.config.networkParams.chainId.toLowerCase() === chainId
        );
        if (changedEnvironment) {
          this.loadEnvironment(changedEnvironment);
        } else {
          console.log('No detected environment');
        }
      });
    } else {
      this.loadSavedEnvironment();
    }
  }

  loadEnvironment(environment: any) {
    this.environment = environment;
    this.environmentSubject.next(environment);
    localStorage.setItem('environment', JSON.stringify(environment));
  }

  loadSavedEnvironment() {
    const savedEnvironment = localStorage.getItem('environment');
    if (savedEnvironment) {
      this.environment = JSON.parse(savedEnvironment);
      this.loadEnvironment(this.environment);
    }
  }

  getEvent() {
    return this.environmentSubject.asObservable();
  }

  async changeEnvironment(network) {
    const selectedEnvironment = environments.find(
      (item) => item.identifier === network
    );
    this.loadEnvironment(selectedEnvironment);
    localStorage.setItem('environment', JSON.stringify(selectedEnvironment));
  }
}
 */