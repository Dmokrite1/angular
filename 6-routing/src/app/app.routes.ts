import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/other/details/details.component';
import { dumbGuardGuard } from './dumb-guard.guard';

export const routes: Routes = [{
    path: '',
    //Faire une redirection, les requêtes sont redirigées vers localhost:422/home
    redirectTo: 'home',
    pathMatch: "full"
},{
    path: 'home',
    component:HomeComponent
}, {
    path: 'other',
    component: OtherComponent,
    canActivate: [dumbGuardGuard] ,
    children: [{
        path: ':id',
        component: DetailsComponent
    }]
}, {
    //le chemin joker doit absolument être en dernier, car si il match un chemin il ne va pas voir les routes suivantes, par conséquant toutes routes déclarées après lui n'est pas accessible.
    path: '**',
    component: NotFoundComponent
}];
