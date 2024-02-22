import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";

export const passwordContainsPseudo: AsyncValidatorFn = (control: AbstractControl): Promise<ValidationErrors | null> => {
  return new Promise((res) => {
    const pseudoControl = control.get('pseudo');
    const password = control.get('pwd')?.value;
    console.log(pseudoControl, password);
    

    if (password && password.includes(pseudoControl?.value)) { 
      res({
        containsPseudo: {
          message: "Le mot de passe ne doit pas contenir le pseudo",
        },
      });
    } else {
      res(null);
    }
  });
};
