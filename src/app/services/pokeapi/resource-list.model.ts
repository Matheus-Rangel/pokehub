import {NamedAPIResource} from './names-api-resource.model';

export interface ResourceList{
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}
