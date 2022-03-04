import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { DrinkInfoComponent } from './drink-info/drink-info.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularDrinksComponent } from './popular-drinks/popular-drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkInfoComponent,
    DrinkListComponent,
    NavbarComponent,
    PopularDrinksComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
