import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectDrinkSite';


searchText: string = '';

onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  console.log(this.searchText);
}
}
