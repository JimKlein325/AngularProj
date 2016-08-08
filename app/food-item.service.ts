import { Injectable } from '@angular/core';
import { FOODITEMS } from './mock-food-items';
@Injectable()
export class FoodItemService {

  getFoodItems(){
    return FOODITEMS;
  }
}
