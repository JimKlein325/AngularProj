import { Component, EventEmitter } from 'angular2/core'
import { FoodItemComponent } from './food-item.component';
import { FoodItem } from './food-item.model';
import { FoodItemEditComponent } from './food-item-edit.component';

@Component ({
  selector: 'food-item-list',
  inputs: ['foodItemList'],
  directives: [FoodItemComponent, FoodItemEditComponent],
  template: `

  <food-item-display *ngFor="#currentItem of foodItemList"
  (click)="itemClicked(currentItem)"
  [class.selected]="currentItem === selectedFoodItem"
  [foodItem] = "currentItem">
  </food-item-display>
<food-item-edit *ngIf="selectedFoodItem" [foodItem]="selectedFoodItem">
</food-item-edit>

  `
})

export class FoodItemListComponent{
  public foodItemList: FoodItem[];
  public selectedFoodItem: FoodItem;

  constructor() {

  }
  itemClicked(clickedItem: FoodItem): void {
    this.selectedFoodItem = clickedItem;
  }
}
