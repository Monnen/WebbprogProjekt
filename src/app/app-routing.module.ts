import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkInfoComponent } from './drink-info/drink-info.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { IngredientInfoComponent } from './ingredient-info/ingredient-info.component';

const routes: Routes = [
  {path:"drinkinfo/:id", component: DrinkInfoComponent},
  {path:"ingredientinfo/:name", component: IngredientInfoComponent},
  {path:"**", component: DrinkListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
