import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { AgeConverterComponent } from './age-converter/age-converter.component';


export const routes: Routes = [{
    path: "counter",
    component: CounterComponent
}, {
    path: "age",
    component: AgeConverterComponent
}];
