import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import BN from 'bn.js';
import { GlobalAlertService } from '../../global-alert.service';
import { BaseFormComponent } from '../../helpers/base-form.component';
 
import { TransactionResult } from '../../model';
import { NumbersService } from '../../numbers.service';
import { ERC20BaseContract } from '../../providers/ERC20-base';
import { ethereumAddressValidator } from '../../validators/ethereumAddress.validator';
import { ERC20ApprovalEventComponent } from '../erc20-approval-event/erc20-approval-event.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NgIf, NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
 

@Component({
    selector: 'erc20-approve',
    templateUrl: './erc20-approve.component.html',
    styleUrls: ['./erc20-approve.component.css'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        NgIf,
        ButtonModule,
        RippleModule,
        ERC20ApprovalEventComponent,
        NgClass,
    ],
})
export class ERC20ApproveComponent extends BaseFormComponent implements OnInit {
  @Input() contractERC20!: ERC20BaseContract;
  @Input() symbol: string = '';
  @Input() decimals: number = 1;

  isLoading = false;

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
      spenderAddress: [
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

  approve( ) {
    this.submitted = true; 
    if (this.form.valid) {
      this.isLoading = true;

      try {
        this.contractERC20
          .approve(
            (this.form.get('spenderAddress') as FormControl).value,
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
