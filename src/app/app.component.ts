import { Component } from '@angular/core';
import { FetchDrinkByLetterService } from 'app/fetch-drink-by-letter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projektDrinkSidan';


searchText: string = '';

onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  console.log(this.searchText);
}
}
