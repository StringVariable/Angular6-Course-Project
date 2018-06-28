import {
  Directive,
  OnInit,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {

  @HostBinding('class') openDropdownClass;
  dropdownIsOpen: boolean = false;

  constructor() {}

  ngOnInit() {

  }


@HostListener('click') toggleDropdown() {
  if(this.dropdownIsOpen) {
    this.openDropdownClass = '';
  } else {
    this.openDropdownClass = 'open';
  }
  this.dropdownIsOpen = !this.dropdownIsOpen;
}

}
