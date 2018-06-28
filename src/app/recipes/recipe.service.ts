import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe (
      'Chicken Parmie',
      'Chicken Parmie with chips. Oh baby.',
      'https://cdn.newsapi.com.au/image/v1/567d120e61ba43a35504c75c03f28ca0?width=1024',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Cheese', 3),
        new Ingredient('Chips', 20)
      ]
    ),
    new Recipe (
      'Meat Pie',
      'A servo meat pie with dead horse.',
      'https://edge.alluremedia.com.au/m/l/2017/11/Meat-Pie.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Pastry', 2),
        new Ingredient('Sauce', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
