import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ethereumAddressValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (
    control.value.trim().length != 42 &&
    !/^0x[0-9a-fA-F]+$/.test(control.value)
  ) {
 
    return { ethereumAddress: true };
  }
 
  return null;
}
