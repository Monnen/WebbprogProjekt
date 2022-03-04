import { Component, OnInit } from '@angular/core';
import { FetchRandomDrinkService } from 'app/fetch-random-drink.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  info: string[]; 
  subscription: any;
  constructor(private fetch: FetchRandomDrinkService) {
    this.info = [];

   }

  ngOnInit(): void {
    
    this.subscription = this.fetch.fetchRandom().subscribe(data => {
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
