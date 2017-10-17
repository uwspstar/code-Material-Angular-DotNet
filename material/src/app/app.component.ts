import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;

  colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
    { id: 4, name: 'yellow' },
  ];
  color = 2;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ];

  minDate = new Date(2017, 10, 17);

  onChange($event) {
    console.log($event);
  }

  selectCategory(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

}
