import { Course } from './types/course';
import { Player } from './types/player';
import { TeeType } from './types/tee-type.enum';

export interface Game {
  course: Course;
  players: Player[];
  teeType: TeeType;
}
