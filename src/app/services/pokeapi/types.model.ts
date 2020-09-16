import {NamedAPIResource} from './names-api-resource.model';

export interface TypeRelations{
  no_damage_to: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  double_damage_from: NamedAPIResource[];
}
export interface TypePokemon{
  slot: number;
  pokemon: NamedAPIResource;
}

export interface Type{
  id: number;
  name: string;
  damage_relations: TypeRelations;
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource;
  pokemon: TypePokemon[];
}
