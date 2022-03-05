import { Component, OnInit } from '@angular/core';
import { FetchDrinkByLetterService } from 'app/fetch-drink-by-letter.service';
import { ObjectUnsubscribedError, subscribeOn, first } from 'rxjs';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  info: string[];
  subscription: any;
  letter: any;
  changeDetected: Boolean;
  constructor(private fetch: FetchDrinkByLetterService) {
    this.info = [];
    this.letter = 'a';
    this.changeDetected = true;
   }

  ngOnInit(): void {
    if(this.changeDetected){
      this.subscription = this.fetch.fetchByLetter(this.letter).pipe(first()).subscribe(data => {
        this.info = Object(JSON.parse(data))["drinks"];
      })
      this.changeDetected = false;
    }
    
  }

  ngDoCheck(){
    if(this.changeDetected){
      this.subscription.unsubscribe();
      if(this.letter == 'af'){
        this.subscription.unsubscribe();
      this.subscription = this.fetch.fetchAlcoholFree().pipe(first()).subscribe(data => {
      this.info = Object(JSON.parse(data))["drinks"] || [];
    })
      }else{
        this.subscription = this.fetch.fetchByLetter(this.letter).pipe(first()).subscribe(data => {
          this.info = Object(JSON.parse(data))["drinks"] || [];
        })
      }
      
      this.changeDetected = false;
    }
    

  }
  updateLetter(l:any){
    if(l!== this.letter){
      this.letter = l;
      this.changeDetected = true;
    }
 
    
  }

  updateAlcFree(){
    
    if(this.letter !== 'af'){
      this.letter = 'af';
      this.changeDetected = true;
    }
    
  }

  getIndices(): number[]{
    return [...Array(this.info.length).keys()];
  };

  getImg(idx: any): string[]{
    let t = [];
    t.push(Object(this.info[idx])["strDrinkThumb"])
    return t;
  }
  getName(idx: any): string[]{
    let t = [];
    t.push(Object(this.info[idx])["strDrink"])
    return t;
  }
  getTags(idx: any): string[]{
    let t = [];
    t.push(Object(this.info[idx])["strTags"])
    return t;
  }
  getAlpha(): string[]{
    return "abcdefghijklmnopqrstuvwxyz".split("");
  }
  getURLwithID(idx:any){
    return "/drinkinfo/"  + Object(this.info[idx])["idDrink"];
  }

}
