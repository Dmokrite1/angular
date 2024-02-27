import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-age-converter',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './age-converter.component.html',
  styleUrl: './age-converter.component.css'
})

export class AgeConverterComponent {
  birthdate = signal(new Date());
  isNewValue = false
  age = computed(() => {
    const today = new Date();
    let baseAge = today.getFullYear() - this.birthdate().getFullYear();
    if(this.isBirthdayNotPassed(today, baseAge)) {
      baseAge--;
    }
    return baseAge;
  })

  private isBirthdayNotPassed(today:Date, baseAge: number) {
    return (this.birthdate().getMonth() > today.getMonth() || (this.birthdate().getMonth() === today.getMonth() && this.birthdate().getDay() > today.getDay())) && baseAge !==0
  }

  dogAge = computed(() => {
    return (this.age() * 7);
  })

  setBirthdate(date: string) {
    this.isNewValue= true;
    this.birthdate.set(new Date(date))
  }
}