import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drinkar } from 'app/shared/models/Drinkar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drinkar:Drinkar[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if (['params.searchTerm'])
    //     this.drinkar = this.drinkService.getAll().filter(food =>
    //       this.drinkar.name.toLowerCase().includes(['params.searchTerm'].toLowerCase()));
    //   else
    //     this.drinkar = this.drinkService.getAll();
    // })


  }
  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
