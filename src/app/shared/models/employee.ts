import { Location } from './location';
import{ Step } from './step';

export interface Employee {
  id: number;
  name: string;
  floor: number;
  locations: Array<Location>;
  steps: Array<Step>;
}