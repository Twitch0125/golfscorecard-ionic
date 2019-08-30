import { TeeType } from './tee-type.enum';

export interface TeeBox {
  teeTypeId: number;
  teeType: TeeType;
  par: number;
  yards: number;
  meters?: number;
  hcp: number;
}
