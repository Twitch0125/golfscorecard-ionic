import { Pipe, PipeTransform } from '@angular/core';

import { TeeBox } from './types/tee-box';
import { TeeType } from './types/tee-type.enum';

@Pipe({
  name: 'teeTypes'
})
export class TeeTypesPipe implements PipeTransform {
  transform(boxes: TeeBox[], ...args: any[]): any {
    console.log(boxes, 'pipe value');
    // console.log(Object.keys(TeeType).includes(boxes), `${boxes} eval`);

    // if (Object.keys(TeeType).includes(value)) {
    //   return value;
    // } else return undefined;
    boxes.forEach(box => {
      Object.keys(TeeType).includes(box.teeType);
    });
    let validBoxes: TeeBox[] = boxes.filter(box =>
      Object.keys(TeeType).includes(box.teeType)
    );

    return validBoxes;

    // return Object.keys(TeeType).includes(boxes) ? boxes : null;
  }
}
