import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokeapiService} from '../../../services/pokeapi/pokeapi.service';
import {Pokemon} from '../../../services/pokeapi/pokemon.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  selectedPokemon: Pokemon;
  selectedPokemonSubscription: Subscription;
  constructor(private pokeService: PokeapiService) { }

  ngOnInit(): void {
    this.selectedPokemonSubscription = this.pokeService.getSelectedPokemon()
      .subscribe(value => this.selectedPokemon = value);
  }

  ngOnDestroy(): void {
    this.selectedPokemonSubscription.unsubscribe();
  }
}
