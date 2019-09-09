import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addScores',
  pure: false
})
//adds up all the numbers in an array from [0] to [end]
export class AddScoresPipe implements PipeTransform {
  transform(value: number[], ...args: any[]): any {
    return value.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    // return value[0];
  }
}
