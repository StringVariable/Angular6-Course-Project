import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
