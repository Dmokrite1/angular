import { AbstractControl, ValidationErrors } from "@angular/forms";

/*
* Une function de validation dans Angular est une function qui reçoit un abstractControl en params et qui renvoye une erreur de validation or null(renvoi null si il n'y a pas d'erreurs)
AbstractControl est l'interface qui est à la base de FormControl et de FormGroup
*/

export function cannotBeForbiddenDomainValidator(control: AbstractControl): ValidationErrors | null {
    const splittedEmail = control.value.split(".")
    // recup le dernier elem du tableau qui correspond à l'extension de l'email
    const emailExtension = splittedEmail[splittedEmail.length -1]

    if (emailExtension === "default") {
        return {
            forbiddenExtension: {
               actualExtension: emailExtension, 
            }
        }
    }
    return null;
}