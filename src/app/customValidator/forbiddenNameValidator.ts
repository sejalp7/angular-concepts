import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function forbiddenNameValidator(control: AbstractControl) : {[ key: string]: any } | null {
//    const forbidden = /admin/.test(control.value);
//    return forbidden ? { 'forbiddenName' : { value: control.value }} : null;
// }

export function forbiddenNameValidator(forbiddeName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddeName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
