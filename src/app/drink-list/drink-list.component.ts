import { Component, OnInit } from '@angular/core';
import { FetchDrinkByLetterService } from 'app/fetch-drink-by-letter.service';
import { ObjectUnsubscribedError, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  info: string[];
  subscription: any;
  constructor(private fetch: FetchDrinkByLetterService) {
    this.info = [];

   }

  ngOnInit(): void {
    
    this.subscription = this.fetch.fetchByLetter('a').subscribe(data => {
      this.info = Object(JSON.parse(data))["drinks"];
      console.log(this.info);
    })
    
  }
  updateLetter(l:any){
    this.subscription.unsubscribe();
    this.subscription = this.fetch.fetchByLetter(l).subscribe(data => {
      this.info = Object(JSON.parse(data))["drinks"];
      console.log(this.info);
    })
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

}
