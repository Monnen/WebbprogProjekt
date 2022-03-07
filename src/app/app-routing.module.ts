import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './searching/searching.component';
import { DrinkInfoComponent } from './drink-info/drink-info.component';

const routes: Routes = [
  {path:'search/:searchString', component:SearchingComponent},
  {path: 'drink-info', component:DrinkInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
