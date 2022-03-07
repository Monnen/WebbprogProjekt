import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkInfoComponent } from './drink-info/drink-info.component';
import { IngredientInfoComponent } from './ingredient-info/ingredient-info.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { PopularDrinksComponent } from './popular-drinks/popular-drinks.component';
import { RandomComponent } from './random/random.component';
import { SearchingComponent } from './searching/searching.component';

const routes: Routes = [
  {path: 'drink-list', component: DrinkListComponent},
  {path: '**', component: PopularDrinksComponent},
  {path: 'popular-drinks', component: PopularDrinksComponent},
  {path: 'random', component: RandomComponent},
  {path:"drinkinfo/:id", component: DrinkInfoComponent},
  {path:"ingredientinfo/:name", component: IngredientInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
