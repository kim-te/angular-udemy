import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServce } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Handpulled Noodles', 
    //         'Homemade handpulled noodles', 
    //         'https://omnivorescookbook.com/wp-content/uploads/2015/02/1501_Hand-Pulled-Noodles_005.jpg',
    //         [
    //             new Ingredient('Flour', 1),
    //             new Ingredient('Water', 1)

    //         ]),
    //     new Recipe(
    //         'Ground Beef Stir Fry', 
    //         'A recipe to use the homemade handpulled noodles', 
    //         'https://s23209.pcdn.co/wp-content/uploads/2016/10/Ground-Beef-Noodle-Stir-FryIMG_3171-360x360.jpg',
    //         [
    //             new Ingredient('Beef', 1),
    //             new Ingredient('Bell Peppers', 3)

    //         ])
    //   ];

    private recipes: Recipe[] = [];
    
      constructor(private slService: ShoppingListServce) {}

setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
}

getRecipes() {
    return this.recipes.slice();

}

getRecipe(index: number) {
    return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
}

addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
}
        

}