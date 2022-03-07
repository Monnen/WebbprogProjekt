import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import{ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DrinkListComponent } from 'app/drink-list/drink-list.component';
import { FetchDrinkByNameService } from 'app/fetch-drink-by-name.service';

const drinkar = ['Margarita', 'GT'];
//bara för att testa. måste få in alla drinkar

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css'],
  styles: ['.form-control { width: 300px; }']
})
export class SearchingComponent implements OnInit {
  drinkar: string[];
  subscription: any;

  public model: any;

  searchTerm: String = "";
  
  constructor(private fetch: FetchDrinkByNameService, private route:ActivatedRoute, private router:Router) { 
    this.drinkar=[];
  }

  sendData(event: any) {
    //event.target.value är det man skrivit in i rutan
    //Skicka till info-sidan när man tryckt på enter
    if(event.key === 'Enter') {
    this.subscription = this.fetch.fetchByName(event.target.value).subscribe(data => {
      this.drinkar = Object(JSON.parse(data))["drinks"];
      console.log(this.drinkar);
    })
    }
  }

  updateName(l:any){
    this.subscription.unsubscribe();
    this.subscription = this.fetch.fetchByName(l).subscribe(data => {
      this.drinkar = Object(JSON.parse(data))["drinks"];
      console.log(this.drinkar);
    })
  }
  getAlpha(): string[]{
    return "abcdefghijklmnopqrstuvwxyz".split("");
  }

  getName(idx: any): string[]{
    let t = [];
    t.push(Object(this.drinkar[idx])["strDrink"])
    return t;
  }
  getTags(idx: any): string[]{
    let t = [];
    t.push(Object(this.drinkar[idx])["strTags"])
    return t;
  }

  getIndices(): number[]{
    return [...Array(this.drinkar.length).keys()];
  };

  getImg(idx: any): string[]{
    let t = [];
    t.push(Object(this.drinkar[idx])["strDrinkThumb"])
    return t;
  }

  ngOnInit(): void {
  

    this.route.params.subscribe(params => {
      if (['params.searchTerm'])
        [this.searchTerm] = ['params.searchTerm'];
    })
  }

  //Visa förslag när man söker
   search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
     text$.pipe(
       debounceTime(200),
       distinctUntilChanged(),
       map(term => term.length < 2 ? []
         : drinkar.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
     )

    enteredSearchValue: string = '';
    
     @Output()
     searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

     onSearchTextChanged(){
       this.searchTextChanged.emit(this.enteredSearchValue);
     }
}