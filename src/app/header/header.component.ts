import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<boolean>();
  @Output() shoppingListClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick() {
    this.recipeClicked.emit(true);
  }

  onShoppingListClick() {
    this.shoppingListClicked.emit(true);
  }

}
