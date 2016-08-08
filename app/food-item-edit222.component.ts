import {Component} from 'angular2/core';
import {FoodItem} from './food-item.model';

@Component({
  selector: 'food-item-edit',
  inputs: ['foodItem'],
  template: `
  <div class="item-form">
  <label for="item-name">Edit Name: </label>
  <input id="item-name" [(ngModel)]="foodItem.name" class="col-sm-8 input-lg task-form"/>
  <label for="item-name">Edit details: </label>
  <input id="item-name" [(ngModel)]="foodItem.details" class="col-sm-8 input-lg task-form"/>
  <label for="item-name">Edit Calories: </label>
  <input id="item-name" [(ngModel)]="foodItem.calories" class="col-sm-8 input-lg task-form"/>
     </div>  



  <div class="container">
    <form>
      <div class="form-group row">
        <label for="item-name" class=".col-form-label">Edit Name: </label>
      </div>
      <div class="col-sm-10">
        <input id="item-name" [(ngModel)]="foodItem.name"  <form>/>
      </div>

    </form>
  </div>
  `
})
export class FoodItemEditComponent {
  public foodItem: FoodItem;
}