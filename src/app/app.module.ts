import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { DrinkInfoComponent } from './drink-info/drink-info.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { IngredientInfoComponent } from './ingredient-info/ingredient-info.component';
import { NgbdCollapseBasic } from './collapse/collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DrinkInfoComponent,
    DrinkListComponent,
    IngredientInfoComponent,
    NgbdCollapseBasic
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
