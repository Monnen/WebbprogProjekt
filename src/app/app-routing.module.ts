import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { PopularDrinksComponent } from './popular-drinks/popular-drinks.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {path: 'drink-list', component: DrinkListComponent},
  {path: 'popular-drinks', component: PopularDrinksComponent},
  {path: 'random', component: RandomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
