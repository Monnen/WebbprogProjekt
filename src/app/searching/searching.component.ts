import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import{ActivatedRoute, Router} from '@angular/router';
import { FetchDrinkByNameService } from 'app/fetch-drink-by-name.service';

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

  searchTerm: any = "";
  
  constructor(private fetch: FetchDrinkByNameService, private route:ActivatedRoute, private router:Router) { 
    this.drinkar=[];
    
    this.route.paramMap.subscribe(params => {
      
      this.searchTerm = this.route.snapshot.paramMap.get('sökTerm');
      this.subscription = this.fetch.fetchByName(this.searchTerm).subscribe(data => {
        this.drinkar = Object(JSON.parse(data)["drinks"]);
      })

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

  getIndices(): any{

    let result = [...Array(this.drinkar.length).keys()];
    if (this.drinkar.length){
      return result;
    }
    
    return null;
  };

  getImg(idx: any): string[]{
    let t = [];
    t.push(Object(this.drinkar[idx])["strDrinkThumb"])
    return t;
  }

  getURLwithID(idx:any){
    return "/drinkinfo/"  + Object(this.drinkar[idx])["idDrink"];
  }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.paramMap.get('sökTerm');
    this.fetch.fetchByName(this.searchTerm).subscribe(data => {
      this.drinkar = Object(JSON.parse(data)["drinks"]);
    })
    
  }

  //Visa förslag när man söker
   search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
     text$.pipe(
       debounceTime(200),
       distinctUntilChanged(),
       map(term => term.length < 2 ? []
         : this.drinkar.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
     )

    enteredSearchValue: string = '';
    
     @Output()
     searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

     onSearchTextChanged(){
       this.searchTextChanged.emit(this.enteredSearchValue);
     }
}