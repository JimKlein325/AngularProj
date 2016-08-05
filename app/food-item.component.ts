import {Component} from 'angular2/core';
import { FoodItem } from './food-item.model';

@Component ({
  selector: 'food-item-display',
  inputs: ['foodItem'],
  template: `

  <tr>
    <td>
    <h3>{{foodItem.name}}</h3>
    <p>{{foodItem.details}}</p>
    <p>{{foodItem.calories}}</p>
    </td>
    </tr>

  `
})
export class FoodItemComponent {
  public foodItem: FoodItem;
}
