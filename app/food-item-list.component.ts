import { Component, EventEmitter } from 'angular2/core'
import { FoodItemComponent } from './food-item.component';
import { FoodItem } from './food-item.model';

@Component ({
  selector: 'food-item-list',
  inputs: ['foodItemList'],
  directives: [FoodItemComponent],
  template: `
  <p>Hello {{foodItemList[0].name}}</p>

  <food-item-display *ngFor="#currentItem of foodItemList"
  [foodItem] = "currentItem">
  </food-item-display>

  `
})

export class FoodItemListComponent{
  public foodItemList: FoodItem[];

  constructor() {

  }
}
