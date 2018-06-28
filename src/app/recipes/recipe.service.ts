import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe (
      'Lights',
      'Ellie Goulding\'s first album.',
      'http://e-cdn-images.deezer.com/images/artist/7cb51cc348a5f81a5d641b2ee2887cde/200x200-000000-80-0-0.jpg'
    ),
    new Recipe (
      'Halcyon',
      'Ellie Goulding\'s second album.',
      'http://e-cdn-images.deezer.com/images/artist/7cb51cc348a5f81a5d641b2ee2887cde/200x200-000000-80-0-0.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
