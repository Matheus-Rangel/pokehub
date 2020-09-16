import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../../services/pokeapi/pokemon.model';

@Component({
  selector: 'app-pokemon-details-general-info',
  templateUrl: './pokemon-details-general-info.component.html',
  styleUrls: ['./pokemon-details-general-info.component.scss']
})
export class PokemonDetailsGeneralInfoComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() { }

  ngOnInit(): void {
  }
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
}
