import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import BN from 'bn.js';
 
  
import { GlobalAlertService } from '../../global-alert.service';
import { BaseFormComponent } from '../../helpers/base-form.component';
import { NumbersService } from '../../numbers.service';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { ethereumAddressValidator } from '../../validators/ethereumAddress.validator';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
 

@Component({
    selector: 'erc20-allowance',
    templateUrl: './erc20-allowance.component.html',
    styleUrls: ['./erc20-allowance.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        NgIf,
        ButtonModule,
        RippleModule,
    ],
})
export class ERC20AllowanceComponent extends BaseFormComponent implements OnInit
{
  @Input() contractERC20!: ERC20BaseContract;
  @Input() symbol: string = '';
  @Input() decimals: number = 1;

  isLoading = false;
  showAllowance = false;
  formatedAllowance: string = '0';
  formatedAllowanceTooltip: string = '0';

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
      ownerAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(42),
          ethereumAddressValidator,
        ],
      ],
      spenderAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(42),
          ethereumAddressValidator,
        ],
      ],
    });
  }

  getAllowance() {
    this.submitted = true; 
    if (this.form.valid) {
      this.isLoading = true;
      this.showAllowance = true;
      try {
        this.contractERC20
          .allowance(
            (this.form.get('ownerAddress') as FormControl).value,
            (this.form.get('spenderAddress') as FormControl).value
          )
          .subscribe((result) => {
            if (result.success == false) {
              this._messageService.showToast(
                `It was not possible to get the ${this.symbol} allowance from ${this.form.controls['ownerAddress'].value} to  ${this.form.controls['spenderAddress'].value}`
              );
              this.showAllowance = false;
              return;
            }
            this.formatedAllowance = this._numberService.formatBNShortScale(
              result.result as BN,
              this.decimals
            );
            this.formatedAllowanceTooltip = this._numberService.formatBN(
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
      this.showAllowance = false;
      this._messageService.showToast(
        `The data filled in the form is not valid. Please, fill the form correctly before submit it`
      );
    }
  }
}
