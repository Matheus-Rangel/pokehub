import {NamedAPIResource} from './names-api-resource.model';

export interface PokemonAbility{
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonMoveVersion{
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

export interface PokemonMove{
  move: NamedAPIResource;
  version: PokemonMoveVersion;
}

export interface PokemonSprites{
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonStat{
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

export interface PokemonType{
  slot: number;
  type: NamedAPIResource;
}

export interface Pokemon{
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  form: NamedAPIResource[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}
