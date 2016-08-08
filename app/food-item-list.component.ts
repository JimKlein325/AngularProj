import { Component, EventEmitter } from 'angular2/core'
import { FoodItemComponent } from './food-item.component';
import { FoodItem } from './food-item.model';
import { FoodItemEditComponent } from './food-item-edit.component';
import { FoodItemNewComponent } from './food-item-new.component';
import { CaloricContentPipe } from './high-calorie.pipe';

@Component ({
  selector: 'food-item-list',
  inputs: ['foodItemList'],
  directives: [FoodItemComponent, FoodItemEditComponent, FoodItemNewComponent],
  pipes: [CaloricContentPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="high">Show High Cal</option>
    <option value="low">Show Low Cal</option>
  </select>
  <food-item-display *ngFor="#currentItem of foodItemList | caloricContent:filterCaloricContent"
  (click)="itemClicked(currentItem)"
  [class.selected]="currentItem === selectedFoodItem"
  [foodItem] = "currentItem">
  </food-item-display>
  <br>
<food-item-edit *ngIf="selectedFoodItem" [foodItem]="selectedFoodItem">
</food-item-edit>
<br>

<item-new (onSubmitNewFoodItem)="createFoodItem($event)"></item-new>

  `
})

export class FoodItemListComponent{
  public foodItemList: FoodItem[];
  public selectedFoodItem: FoodItem;
  public filterCaloricContent: string = "";

  constructor() {

  }
  itemClicked(clickedItem: FoodItem): void {
    this.selectedFoodItem = clickedItem;
  }
  createFoodItem(foodItem: FoodItem):void {
    this.foodItemList.push(foodItem);
  }
  onChange(filterOption){
    this.filterCaloricContent = filterOption;
  }
}
