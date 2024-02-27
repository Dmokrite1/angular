import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/other/details/details.component';
import { dumbGuardGuard } from './dumb-guard.guard';
import { LizardComponent } from './pages/lizard/lizard.component';
import { MinuteComponent } from './pages/minute/minute.component';
import { OddComponent } from './pages/minute/odd/odd.component';
import { EvenComponent } from './pages/minute/even/even.component';
import { isOddMinuteGuard } from './is-odd-minute.guard';
import { isEvenMinuteGuard } from './is-even-minute.guard';

export const routes: Routes = [{
    path: '',
    //Faire une redirection, les requêtes sont redirigées vers localhost:422/home
    redirectTo: 'home',
    pathMatch: "full"
}, {
    path: 'home',
    component:HomeComponent
}, {
    path: 'other',
    component: OtherComponent,
    canActivate: [dumbGuardGuard],
    children: [{
        path: ':id',
        component: DetailsComponent
    }]
}, {
    path: 'lizard',
    component: LizardComponent,
    canActivate: [dumbGuardGuard]
}, {
    path: 'minute',
    component: MinuteComponent,
    canActivate: [dumbGuardGuard],
    children: [{
        // Attention au nom du path qui doit être différent de l'autre sinon ils seront interprétés comme le premier uniquement, Ex: ici on met les routes 'odd' et 'even'
        path: 'odd',
        component: OddComponent, 
        canActivate: [isOddMinuteGuard]
    }, {
        path: 'even',
        component: EvenComponent,
        canActivate: [isEvenMinuteGuard]
    }]
}, {
    //le chemin joker doit absolument être en dernier, car si il match un chemin il ne va pas voir les routes suivantes, par conséquant toutes routes déclarées après lui n'est pas accessible.
    path: '**',
    component: NotFoundComponent
}];
