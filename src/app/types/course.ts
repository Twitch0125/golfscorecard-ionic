import { Hole } from './hole';

export interface Course {
  id: string;
  courseId?: number;
  holeCount?: number;
  holes: Hole[];
  website?: string;
}
