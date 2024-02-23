import { AbstractControl, ValidationErrors } from "@angular/forms";

export function pseudoNotInPasswordValidator(control: AbstractControl): ValidationErrors | null {
    //récupère la valeur du champs pseudo
    const pseudo = control.get('pseudo')?.value.toLowerCase();
    //récupère valeur mdp
    const password = control.get('password')?.value.toLowerCase();

    if(password.includes(pseudo)) {
        return {
            containPseudo: true
        }
    }
    return null;
}