import { AbstractControl, ValidationErrors } from "@angular/forms";

export async function banWords(control: AbstractControl): Promise<ValidationErrors | null> {
  const bannedWords = ["nano", "windows", "microsoft"];
  const banWord = control.value;

  return new Promise((res) => {
    setTimeout(() => {
      if (bannedWords.includes(banWord)) {
        res({
          banWordSpotted: {
            message: `Le mot "${banWord}" est interdit. Veuillez choisir un autre mot.`,
          },
        });
      } else {
        res(null);
      }
    }, 5000);
  });
}
