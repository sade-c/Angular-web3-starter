import { FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
 
import { GlobalAlertService } from '../global-alert.service';
import { TransactionResult } from '../model';
import * as errorMessagesJSON from './common-errors-messages.json';
import { inject } from '@angular/core';


export abstract class BaseFormComponent     {
  protected errorMessages: { [errorId: string]: string } = {};
  public form!: FormGroup;
  public isLoading = false;
  protected submitted = false;
	private _messageService = inject(GlobalAlertService);
  constructor( ) {
  
    this.errorMessages = errorMessagesJSON;
  }

  /**
   * Handle fails throw by the backend setting this.isLoading to false,
   * showing the error message in the UI and returning a Observable<TransactionResult>
   * with the success property set to false and the result with the err.message
   *
   * @param err Error object
   * @returns Observable<TransactionResult> with the success property set to false
   *  and the result with the err.message
   */
  handleBackendError(err: any): Observable<TransactionResult<string>> {
    this.handleUnexpectedError(err);
    return of({ success: false, result: err.message });
  }

  /**
   * Handle fails throw by the backend setting this.isLoading to false,
   * showing the error message in the UI and returning a Observable<TransactionResult>
   * with the success property set to false and the result with the err.message
   *
   * @param err Error object
   * @returns Observable<TransactionResult> with the success property set to false
   *  and the result with the err.message
   */
  handleTypedBackendError<T>(err: any): Observable<TransactionResult<T>> {
    this.handleUnexpectedError(err);
    return of({ success: false, result: err.message });
  }

  /**
   * Handle fails throw by Observable setting this.isLoading to false,
   * showing the error message in the UI
   *
   * @param err Error object
   */
  handleUnexpectedError(err: any): void {
    this._messageService.showErrorAlert(err.message);
    this.isLoading = false;
  }

  /**
   * Handle successful transaction (send or call) setting this.isLoading to false,
   * showing the error message in the UI
   *
   * @param result The result of the request done to the backend. The result.success can be false
   * @param errorMessage Message to be shown in case of {result.success} is false (optional)
   */
  handleTransactionResult(
    result: TransactionResult<string>,
    errorMessage?: string
  ): void {
    if (result.success == false) {
      this._messageService.showToast(
        errorMessage
          ? errorMessage
          : `It was not possible to send the transaction: ${result.result}`
      );
    } else {
      this._messageService.showToast(result.result);
    }
    this.isLoading = false;
  }

  /**
   *
   * @param controlName Name of the control in this.form
   * @param errorId ID of the error you're looking for
   * @returns TRUE if the control with name {controlName} has the error {errorId}
   */
  hasError(controlName: string, errorId: string) {
    return this.form.controls[controlName].hasError(errorId);
  }

  /**
   * @param controlName Name of the control in this.form
   * @returns the message of the first error in the control with name {controlName}. return NULL if there is no error
   */
  getErrorMessage(controlName: string): string | null {
    if (
      !this.form.controls[controlName].dirty &&
      !this.form.controls[controlName].touched &&
      !this.submitted
    ) {
      return null;
    }
    for (let errorId in this.form.controls[controlName].errors) {
      //TODO: repensar isso aqui  console.log(controlName, this.form.controls[controlName].errors);
      if (
        this.errorMessages[errorId] &&
        this.errorMessages[errorId].indexOf('{0}') == -1
      ) {
        return this.errorMessages[errorId];
      } else if (this.errorMessages[errorId]) {
        const required = Object.values(
          this.form.controls[controlName].getError(errorId)
        )[0] as string;
        return `${this.errorMessages[errorId]}`.replace(`{0}`, required);
      } else {
        return errorId;
      }
    }

    return null;
  }

  /**
   * @returns List with all error messages in this.form
   */
  getAllErrors(): string[] {
    let result = [];
    for (let controlName in this.form.controls) {
      for (let errorId in this.form.controls[controlName].errors) {
        if (this.errorMessages[errorId]) {
          result.push(`${controlName} ${this.errorMessages[errorId]}`);
        } else {
          result.push(`${controlName} ${errorId}`);
        }
      }
    }
    return result;
  }
}
