import { Routes } from '@angular/router';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { GenerationsDetailsComponent } from './generations-details/generations-details.component';

export const routes: Routes = [
    { path : 'generations', component : GenerationsComponent },
    { path : 'generations/:generation', component: GenerationsDetailsComponent},
    { path : 'pokemons', component : PokemonsComponent }
];
