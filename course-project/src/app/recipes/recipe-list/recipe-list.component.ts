import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test', 'This is a test', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'),
    new Recipe('A Test', 'This is a test', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    
  }

}
