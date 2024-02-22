import { AbstractControl, ValidationErrors } from "@angular/forms";
// renvoi une erreur de validation si l'email est default@default.com, si ne renvoie rien alors pas d'erreurs
export async function uniqueEmailValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise ((res, rej) => {
        setTimeout(() => {
        const email = control.value;
        if (email === "default@default.com") {
            res ({
                uniqueEmail: true
            });
        }
        res(null);
        }, 5000);
    }); 
}