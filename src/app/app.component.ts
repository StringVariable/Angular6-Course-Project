import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  @Output() displayRecipe: boolean = true;
  @Output() displayShoppingList: boolean = false;

  onShowRecipe(showRecipeStatus) {
    this.displayRecipe = true;
    this.displayShoppingList = false;
  }

  onShowShoppingList(showRecipeStatus) {
    this.displayRecipe = false;
    this.displayShoppingList = true;
  }
}
