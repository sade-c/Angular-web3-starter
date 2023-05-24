import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalAlertService } from '../../global-alert.service';
import { BaseFormComponent } from '../../helpers/base-form.component';
 
import { TransactionResult } from '../../model';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { ethereumAddressValidator } from '../../validators/ethereumAddress.validator';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
 

@Component({
    selector: 'erc20-transfer-from',
    templateUrl: './erc20-transfer-from.component.html',
    styleUrls: ['./erc20-transfer-from.component.css'],
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
export class ERC20TransferFromComponent
  extends BaseFormComponent
  implements OnInit
{
  @Input() contractERC20!: ERC20BaseContract;
  @Input() symbol: string = '';
  @Input() decimals: number = 1;

  isLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: GlobalAlertService
  ) {
    super();
  }

  ngOnInit(): void {
    //o minLength é para prevenir o "Short address/parameter Attack"
    this.form = this._formBuilder.group({
      fromAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(42),
          ethereumAddressValidator,
        ],
      ],
      toAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(42),
          ethereumAddressValidator,
        ],
      ],
      value: ['', [Validators.required, Validators.min(1)]],
    });
  }

  transferFrom( ) {
    this.submitted = true; 
    if (this.form.valid) {
      this.isLoading = true;

      try {
        this.contractERC20
          .transferFrom(
            (this.form.get('fromAddress') as FormControl).value,
            (this.form.get('toAddress') as FormControl).value,
            (this.form.get('value') as FormControl).value,
            (result: TransactionResult<string>) => {
              this.isLoading = false;
              this._messageService.showToast(result.result);
            }
          )
          .subscribe((result) => {
            if (result.success == false) {
              this._messageService.showToast(
                `It was not possible to send the transaction: ${result.result}`
              );
              return;
            } else {
              this._messageService.showToast(result.result);
            }

            this.isLoading = false;
          });
      } catch (e: unknown) {
        this.isLoading = false;
        this._messageService.showToast((<Error>e).message);
      }
    } else {
      this._messageService.showToast(
        `The data filled in the form is not valid. Please, fill the form correctly before submit it`
      );
    }
  }
}
