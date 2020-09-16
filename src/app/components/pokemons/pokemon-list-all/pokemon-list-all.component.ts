import {Component, OnDestroy, OnInit} from '@angular/core';
import {NamedAPIResource} from '../../../services/pokeapi/names-api-resource.model';
import {PokeapiService} from '../../../services/pokeapi/pokeapi.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pokemon-list-all',
  templateUrl: './pokemon-list-all.component.html',
  styleUrls: ['./pokemon-list-all.component.scss']
})
export class PokemonListAllComponent implements OnInit, OnDestroy {
  pokemonList: NamedAPIResource[] = [];
  pokemonListFiltered: NamedAPIResource[] = [];
  pokemonSubscription: Subscription;
  constructor(private pokeService: PokeapiService) {
  }
  ngOnInit(): void {
    this.pokemonSubscription = this.pokeService.getPokemons().subscribe(value => {
      this.pokemonList = value;
      this.pokemonListFiltered = value;
    });
  }
  upperFirstLetter(name: string): string{
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  getSpriteUrl(pokemon: NamedAPIResource): string {
    const pokemonId = pokemon.url.slice(33).replace(/\//g, '');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  filterList(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (!target.value){
      this.pokemonListFiltered = this.pokemonList;
    }else{
      this.pokemonListFiltered = this.pokemonList.filter(value => value.name.includes(target.value.toLowerCase()));
    }
  }

  selectPokemon(pokemon: NamedAPIResource): void{
    this.pokeService.selectPokemon(pokemon.url);
  }

  ngOnDestroy(): void {
    this.pokemonSubscription.unsubscribe();
  }
}
