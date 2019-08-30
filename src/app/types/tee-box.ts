import { TeeType } from './tee-type.enum';

export interface TeeBox {
  teeTypeId: number;
  teeType: TeeType;
  teeHexColor: string;
  par: number;
  yards: number;
  meters?: number;
  hcp: number;
}
