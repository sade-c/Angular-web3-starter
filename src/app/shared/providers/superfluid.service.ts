import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
//import Greeter from '../artifacts/Greeter.json'


import { ProviderErrors } from '../model';
import { DefaultProviderService } from './default-provider.service';
import { WalletProviderService } from './wallet-provider.service';
import { Framework, SuperToken, ConstantFlowAgreementV1, InstantDistributionAgreementV1, Host, Operation } from '@superfluid-finance/sdk-core';
import { environment } from 'src/environments/environment';
import { GlobalAlertService } from '../global-alert.service';
@Injectable({
    providedIn: 'root'
})
export class SuperfluidService {
    sf!: Framework;
    flow!: ConstantFlowAgreementV1;
    greeterContract: any
    operations: Array<Operation> = [];
    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient,
        private alert: GlobalAlertService) {
    }
    async ngOnInit() {
        await this.initFramework();
    }
    async initFramework() {
        this.sf = await Framework.create({
            chainId: environment.config.networkParams.chainIdNumber,
            provider: this.provider.provider,
            customSubgraphQueriesEndpoint: "",// todo add subgraf
            resolverAddress: ""
        });
        this.flow = this.sf.cfaV1;
    }
    async createStream(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }
        const createFlowOperation = this.flow.createFlow({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data

        });

        this.operations.push(createFlowOperation);
    }
    async updateStream(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }
        const FlowOperation = this.flow.updateFlow({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data

        });

        this.operations.push(FlowOperation);
    }
    async deleteStream(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }
        const FlowOperation = this.flow.deleteFlow({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data

        });

        this.operations.push(FlowOperation);
    }
    async startStream(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        let createFlowOperation = this.sf.cfaV1.createFlow({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data
        });
        await createFlowOperation.exec(this.wallet.signer);

    }
    async stopStream(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        let deleteFlowOperation = this.sf.cfaV1.deleteFlow({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data
        });
        const result = await (await deleteFlowOperation.exec(this.wallet.signer)).wait();

    }

    calculateFlowRate(amount: any): number {
        if (typeof Number(amount) !== 'number' || isNaN(Number(amount)) === true) {
            this.alert.showMessageAlert("Number", "You can only calculate a flowRate based on a number", "error");

            return 0;
        } else if (typeof Number(amount) === 'number') {
            if (Number(amount) === 0) {
                return 0;
            }
            const amountInWei = ethers.BigNumber.from(amount);
            const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
            const calculatedFlowRate = +monthlyAmount * 3600 * 24 * 30;
            return calculatedFlowRate;
        }
        return 0;
    }

    async getFlow(sender: string, receiver: string, superToken: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        const result = await this.flow.getFlow({
            superToken: superToken,
            sender: sender,
            receiver: receiver,
            providerOrSigner: this.wallet.signer!,
        });
        return result;
    }

    async getNetFlow(account: string, superToken: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        const result = await this.flow.getNetFlow({
            superToken: superToken,
            account: account,
            providerOrSigner: this.wallet.signer!,
        });
        return result;
    }
    async getAccountFlowInfo(account: string, superToken: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        const result = await this.flow.getAccountFlowInfo({
            superToken: superToken,
            account: account,
            providerOrSigner: this.wallet.signer!,
        });
        return result;
    }

    //ACL Usage

    async createFlowByOperator(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }
        const createFlowOperation = this.flow.createFlowByOperator({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data

        });

        this.operations.push(createFlowOperation);
    }
    async updateFlowByOperator(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }
        const FlowOperation = this.flow.updateFlowByOperator({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data

        });

        this.operations.push(FlowOperation);
    }
    async deleteFlowByOperator(sender: string, flowRate: string, receiver: string, superToken: string, data: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }
        const FlowOperation = this.flow.deleteFlowByOperator({
            sender: sender,
            flowRate: flowRate,
            receiver: receiver,
            superToken: superToken,
            userData: data

        });

        this.operations.push(FlowOperation);
    }
    async updateFlowOperatorPermissions(flowOperator: string, permissions: number, flowRateAllowance: string, superToken: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        const result = await this.flow.updateFlowOperatorPermissions({
            flowOperator: flowOperator,
            permissions: permissions, // should enter 1-7
            flowRateAllowance: flowRateAllowance,
            superToken: superToken
        });
        return result;
    }

    async revokeFlowOperatorWithFullControl(flowOperator: string, superToken: string) {
        if (this.sf == undefined) {
            await this.initFramework();
        }

        const result = await this.flow.revokeFlowOperatorWithFullControl({
            flowOperator: flowOperator,
            superToken: superToken
        });
        return result;
    }

    async greet() {
        let greet = await this.greeterContract.greet();
        return greet;
    }
    async setGreeting(greeting: string) {
        let greet = this.greeterContract.connect(this.wallet.signer).setGreeting(greeting)
            .then(() => { })
            .catch((err) => {
                if (err.code == 4001) {

                    console.error("error", ProviderErrors[err.code].title);
                }
            });


        return greet;
    }
}
