import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokeapiService} from '../../../services/pokeapi/pokeapi.service';
import {Pokemon} from '../../../services/pokeapi/pokemon.model';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../services/authapi/auth.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  selectedPokemon: Pokemon;
  selectedPokemonSubscription: Subscription;
  usernameSubscription: Subscription;
  username: string;
  constructor(private pokeService: PokeapiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.usernameSubscription = this.authService.getUsernameObservable().subscribe(value => this.username = value);
    this.selectedPokemonSubscription = this.pokeService.getSelectedPokemon()
      .subscribe(value => this.selectedPokemon = value);
  }

  ngOnDestroy(): void {
    this.selectedPokemonSubscription.unsubscribe();
    this.usernameSubscription.unsubscribe();
  }
}
