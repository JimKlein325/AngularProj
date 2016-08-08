import { Component } from 'angular2/core';
import { FoodItemListComponent } from './food-item-list.component';
import { FoodItem  } from './food-item.model'

@Component({
  selector: 'my-app',
  directives: [FoodItemListComponent],
  template: `
  <div class="container">
    <h2>Meal Items</h2>
    <div class="box">
      <p>Calories Today:  {{calorieTotal()}}</p>
    </div>
  </div>
    <div class="container">
      <table class="table table-inverse">
        <tbody>
        <thead>
          <food-item-list
            [foodItemList]="foodItems">
          </food-item-list>
          </thead>
        </tbody>
      </table>

    </div>
  `
})

export class AppComponent {
  public foodItems: FoodItem[];
   constructor(){
     this.foodItems = [
       new FoodItem("Waffle", "Belgian Style with Strawberries and Whipped Cream", 700),
       new FoodItem("Coffee", "Nice and Hot with Cream and Sugar", 100)
     ];
   }

   calorieTotal(): number {
     var total = 0;
     for( var foodItem of this.foodItems)
     {
       total = total + foodItem.calories;
     }
     return total;
   }
}
