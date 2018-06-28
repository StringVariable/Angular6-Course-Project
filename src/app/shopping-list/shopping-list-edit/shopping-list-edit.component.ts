import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: string, amount: number) {
    this.onAddIngredient.emit({
      name: name,
      amount: amount
    })
  }

}
