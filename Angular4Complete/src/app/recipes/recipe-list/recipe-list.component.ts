import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipt',
      'a test description',
      'http://maxpixel.freegreatpicture.com/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ,
    new Recipe('B Test Recipt',
      'B test description',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken-kathi-roll-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
