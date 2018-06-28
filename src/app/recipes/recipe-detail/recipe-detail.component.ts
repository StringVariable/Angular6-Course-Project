import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppingListservice: ShoppingListService) { }

  ngOnInit() {
  }

  sendToShoppingList() {
    for(let i in this.recipe.ingredients) {
      this.shoppingListservice.addIngredient(this.recipe.ingredients[i]);
    }
  }

}
