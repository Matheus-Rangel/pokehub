import {NamedAPIResource} from './names-api-resource.model';

export interface Move{
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  damage_class: NamedAPIResource;
  type: NamedAPIResource;
}
