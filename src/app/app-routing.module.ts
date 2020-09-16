import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PokemonComponent} from './components/pokemons/pokemon.component';

const routes: Routes = [
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'pokemon', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
