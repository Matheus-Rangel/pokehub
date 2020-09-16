import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokeapiService} from '../../../services/pokeapi/pokeapi.service';
import {Type} from '../../../services/pokeapi/types.model';
import {Subscription} from 'rxjs';
import {MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-types.component.html',
  styleUrls: ['./pokemon-list-types.component.scss']
})
export class PokemonListTypesComponent implements OnInit, OnDestroy {
  pokemonTypes: Type[];
  pokemonTypeSubscription: Subscription;
  constructor(private pokeService: PokeapiService) { }

  ngOnInit(): void {
    this.pokemonTypeSubscription = this.pokeService.getPokemonTypes().subscribe(value => this.pokemonTypes = value);
  }

  ngOnDestroy(): void {
    this.pokemonTypeSubscription.unsubscribe();
  }

  filterByType(selectedTypes: MatSelectionList): void {
    if (selectedTypes){
      console.log(selectedTypes);
      this.pokeService.filterPokemons(
        selectedTypes.selectedOptions.selected.map(value => value.value)
      );
    }
  }

  upperFirstLetter(name: string): string{
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
