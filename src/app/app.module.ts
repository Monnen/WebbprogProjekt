import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchingComponent } from './searching/searching.component';
import { DrinkInfoComponent } from './drink-info/drink-info.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularDrinksComponent } from './popular-drinks/popular-drinks.component';
import { RandomComponent } from './random/random.component';
import { IngredientInfoComponent } from './ingredient-info/ingredient-info.component';
import { NgbdCollapseBasic } from './collapse/collapse.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SearchingComponent,
    DrinkInfoComponent,
    DrinkListComponent,
    NavbarComponent,
    PopularDrinksComponent,
    RandomComponent,
    IngredientInfoComponent,
    NgbdCollapseBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
