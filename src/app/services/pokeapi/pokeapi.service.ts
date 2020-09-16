import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon, PokemonType} from './pokemon.model';
import {Subject, Observable, from} from 'rxjs';
import {ResourceList} from './resource-list.model';
import {NamedAPIResource} from './names-api-resource.model';
import {buffer, concatAll, exhaust, map, mergeAll, toArray} from 'rxjs/operators';
import {isDataSource} from '@angular/cdk/collections';
import {Type} from './types.model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private getPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0';
  private getTypesUrl = 'https://pokeapi.co/api/v2/type/';
  private selectedPokemonSubject: Subject<Pokemon> = new Subject<Pokemon>();
  private pokemons: NamedAPIResource[] = [];
  private pokemonsFilteredSubject: Subject<NamedAPIResource[]> = new Subject<NamedAPIResource[]>();
  private pokemonTypes: Type[] = [];
  private pokemonTypesSubject: Subject<Type[]> = new Subject<Type[]>();
  constructor(private http: HttpClient) {}

  getPokemonsByType(type: string): NamedAPIResource[] {
    const pokemonType = this.pokemonTypes.find(value => value.name === type.toLowerCase());
    if (pokemonType){
      return pokemonType.pokemon.map(value => value.pokemon);
    }
    return [];
  }
  filterPokemons(types: string[]): void{
    console.log(types);
    if (types && types.length > 0){
      from(types).pipe(
        map(value => this.getPokemonsByType(value)),
        concatAll(),
        toArray()
      ).subscribe(value => this.pokemonsFilteredSubject.next(value));
    }else{
      this.pokemonsFilteredSubject.next([...this.pokemons]);
    }
  }
  getPokemonsFilteredObservable(): Observable<NamedAPIResource[]> {
    return this.pokemonsFilteredSubject.asObservable();
  }
  getPokemons(): Observable<NamedAPIResource[]> {
    this.http
      .get<ResourceList>(this.getPokemonsUrl)
      .pipe(map(value => value.results)).subscribe(value => {
        this.pokemonsFilteredSubject.next(value);
        this.pokemons = value;
    });
    return this.pokemonsFilteredSubject.asObservable();
  }
  getPokemonTypes(): Observable<Type[]> {
    this.http
      .get<ResourceList>(this.getTypesUrl).subscribe(types => {
        types.results.forEach(typeResource => {
          this.http.get<Type>(typeResource.url).subscribe(type => {
            this.pokemonTypes.push(type);
            this.pokemonTypesSubject.next([...this.pokemonTypes]);
            console.log(this.pokemonTypes);
          });
        });
    });
    return this.pokemonTypesSubject.asObservable();
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
  getSelectedPokemon(): Observable<Pokemon> {
    return this.selectedPokemonSubject.asObservable();
  }
  selectPokemon(url: string): void {
    this.http.get<Pokemon>(url).subscribe(
      value => {
        this.selectedPokemonSubject.next(value);
      }
    );
  }
}
