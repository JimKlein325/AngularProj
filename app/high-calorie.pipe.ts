import {Pipe, PipeTransform} from 'angular2/core';
import {FoodItem} from './food-item.model';

@Pipe({
  name: "caloricContent",
  pure: false
})
export class CaloricContentPipe implements PipeTransform {
  transform(input: FoodItem[], args) {
    var calorieContent = args[0];
    if(calorieContent === "high") {
      return input.filter( (item) =>  {
        return item.calories > 500;
      });
    } else if (calorieContent === "low") {
      return input.filter( (item) => {
        return item.calories <= 500;
      });
    } else {
      return input;
    }

  }
}
