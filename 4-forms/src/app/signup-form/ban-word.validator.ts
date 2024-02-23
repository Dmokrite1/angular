import { AbstractControl, ValidationErrors } from "@angular/forms";

export async function banWordValidator(control: AbstractControl): Promise<ValidationErrors | null> {

  return new Promise((res) => {
    setTimeout(() => {
        const pseudo = control.value
        const banWords = ["loutre", "poutre", "joute"];
        const banWord = banWords.some(banWord => pseudo.toLowerCase().includes(banWord));
        if (banWord) {
          res({
            containBanWord: true
          });
        }
        
        res(null);
    }, 5000);
  });
}
