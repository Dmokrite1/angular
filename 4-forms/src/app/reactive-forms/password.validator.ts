import { AbstractControl, ValidationErrors } from "@angular/forms";

export function confirmPassword (control: AbstractControl): ValidationErrors | null {
    const passwordFieldValue = control.get('pwd')?.value;
    const passwordConfirmValue = control.get('confirm')?.value;

    if (passwordFieldValue !== passwordConfirmValue) {
        return {
            confirmPassword: true
        }
    }
    console.log(passwordFieldValue);
    
    return null;
}