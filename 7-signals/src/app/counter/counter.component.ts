import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;
  worstBoolean = false;
  private signalCounter = signal(0);
  readonly signalCounterAsReadonly = this.signalCounter.asReadonly();

  tenTimesSignalCounter = computed(() => {
    if(this.worstBoolean) {
      //Si il n'y a pas l'appelle de signalCounter alors computed ne se remet pas automatiquement à jour à chaque fois que signalCounter change de valeur
      console.log(this.signalCounter());
      
      return 100 * Math.floor(Math.random() * 5);
    }
    //C'est le fait d'use la valeur de signalCounter() qui enregistre computed comme devant être mise à jour à chaque fois que la valeur de signalCounter change, utiliser signalCounter() = le rajouter en dépendance de computed
    return this.signalCounter() * 10;
  })

  signalCounterSideEffect = effect(() => {
    console.log(`La nouvelle valeur du compteur est : ${this.signalCounter()}`);
  })

  setSignalAsIs() {
    //Si la nouvelle valeur d'un signal est la même que l'ancienne valeur alors il ne "set" pas la nouvelle valeur. computed et effect dépendant de signalCounter ne se déclancheront pas
    this.signalCounter.set(this.signalCounter())
  }

  signalIncrement() {
    //call la méthode @set de nos signaux parce que c'est dans la méthode @set que se cache la magie dérrière les signaux. Alors que si on réassigne une valeur à signalCounter on ne fait que remplacer notre signal par un nombre
    this.signalCounter.set(this.signalCounter() + 1)
  }

  signalDecrement() {
    this.signalCounter.set(this.signalCounter() - 1)
  }

  basicIncrement() {
    this.counter++;
  }

  basicDecrement() {
    this.counter--;
  }
}
