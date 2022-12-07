import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import BN from 'bn.js';
import { AbiItem } from 'web3-utils';
import { BaseFormComponent } from '../../helpers/base-form.component';
import { GlobalAlertService } from '../../global-alert.service';
import { NumbersService } from '../../numbers.service';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { ethereumAddressValidator } from '../../validators/ethereumAddress.validator';
import { BigNumber, ethers } from 'ethers';
 

@Component({
  selector: 'erc20-balance',
  templateUrl: './erc20-balance.component.html',
  styleUrls: ['./erc20-balance.component.css'],
})

export class ERC20BalanceComponent extends BaseFormComponent implements OnInit {
  @Input() contractERC20!: ERC20BaseContract;
  @Input() symbol: string = '';
  @Input() decimals: number = 1;

  isLoading = false;
  showBalance = false;
  formatedBalance: string = '0';
  formatedBalanceTooltip: string = '0';
  vals:""

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: GlobalAlertService,
    private _numberService: NumbersService
  ) {
    super();
  }

  ngOnInit(): void {
    //o minLength é para prevenir o "Short address/parameter Attack"
    this.form = this._formBuilder.group({
      accountAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(42),
          ethereumAddressValidator,
        ],
      ],
    });
  }

  getBalance( ) {
    this.submitted = true;
   
    if (this.form.valid) {
  
      this.showBalance = true;
      try {
        this.contractERC20
          .balanceOf((this.form.get('accountAddress') as FormControl).value)
          .subscribe((result) => {
            if (result.success == false) {
              this._messageService.showToast(
                `It was not possible to get ${this.form.controls['accountAddress'].value} ${this.symbol} balance`
              );
              this.showBalance = false;
              return;
            }
    
            this.formatedBalance = this._numberService.formatBNShortScale(
              result.result as BN,
              this.decimals
            );
            this.formatedBalanceTooltip = this._numberService.formatBN(
              result.result as BN,
              this.decimals
            );
            this.isLoading = false;
          });
      } catch (e: unknown) {
        this.isLoading = false;
        this._messageService.showToast((<Error>e).message);
      }
    } else {
      this.showBalance = false;
      this._messageService.showToast(
        `The data filled in the form is not valid. Please, fill the form correctly before submit it`
      );
    }
  }
}
