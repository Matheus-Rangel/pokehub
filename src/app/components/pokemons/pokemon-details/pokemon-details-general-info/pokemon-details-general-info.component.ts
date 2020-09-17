import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pokemon} from '../../../../services/pokeapi/pokemon.model';
import {Ability} from '../../../../services/pokeapi/ability.model';
import {Move} from '../../../../services/pokeapi/move.model';
import {PokeapiService} from '../../../../services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-details-general-info',
  templateUrl: './pokemon-details-general-info.component.html',
  styleUrls: ['./pokemon-details-general-info.component.scss']
})
export class PokemonDetailsGeneralInfoComponent implements  OnChanges {
  @Input() pokemon: Pokemon;
  abilities: Ability[];
  moves: Move[];

  constructor(private pokeService: PokeapiService) { }

  upperFirstLetter(name: string): string{
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  formatId(id: number): string {
    if (id < 10){
      return '00' + id;
    }
    if (id < 100){
      return '0' + id;
    }
    if (id < 1000){
      return id.toString();
    }
  }
  private updateStats(): void{
    if (this.pokemon) {
      this.abilities = [];
      this.moves = [];
      this.pokemon.abilities.forEach(value => this.pokeService.getAbility(value.ability.url).subscribe(
        ability => this.abilities.push(ability)
      ));
      this.pokemon.moves.forEach(value => this.pokeService.getMove(value.move.url).subscribe(
        move => {
          this.moves = [...this.moves, move];
        }
      ));
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateStats();
  }
}
