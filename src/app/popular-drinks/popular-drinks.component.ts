import { Component, OnInit } from '@angular/core';
import { FetchDrinkByLetterService } from 'app/fetch-drink-by-letter.service';
import { FetchRandomDrinkService } from 'app/fetch-random-drink.service';
import { FetchDrinkInfoService } from 'app/fetch-drink-info.service';
import { ConsoleLogger } from '@angular/compiler-cli/private/localize';

@Component({
  selector: 'app-popular-drinks',
  templateUrl: './popular-drinks.component.html',
  styleUrls: ['./popular-drinks.component.css']
})
export class PopularDrinksComponent implements OnInit {
  info: string[]; 
  subscription: any;
  constructor(private fetch: FetchDrinkInfoService) {
    this.info = [];

   }

  ngOnInit(): void {
    
    this.subscription = this.fetch.fetchById(11007).subscribe(data => {
      this.info.push(Object(JSON.parse(data))["drinks"]);
      console.log(this.info);
    })
    this.subscription = this.fetch.fetchById(11000).subscribe(data => {
      this.info.push(Object(JSON.parse(data))["drinks"]);
      console.log(this.info);
    })
    this.subscription = this.fetch.fetchById(11004).subscribe(data => {
      this.info.push(Object(JSON.parse(data))["drinks"]);
      console.log(this.info);
    })
    this.subscription = this.fetch.fetchById(13621).subscribe(data => {
      this.info.push(Object(JSON.parse(data))["drinks"]);
      console.log(this.info);
    })
  }

  getIndices(): number[]{
    return [...Array(this.info.length).keys()];
  };

  getImg(idx: any): string[]{
    let t = [];
    t.push(Object(this.info[idx][0])["strDrinkThumb"])
    return t;
  }
  getName(idx: any): string[]{
    let t = [];
    t.push(Object(this.info[idx][0])["strDrink"])
    return t;
  }
  getTags(idx: any): string[]{
    let t = [];
    t.push(Object(this.info[idx][0])["strTags"])
    return t;
  }
}
