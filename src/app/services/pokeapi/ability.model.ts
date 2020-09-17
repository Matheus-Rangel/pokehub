import {NamedAPIResource} from './names-api-resource.model';
export interface VerboseEffect{
  effect: string;
  short_effect: string;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  effects_entries: VerboseEffect[];
}
