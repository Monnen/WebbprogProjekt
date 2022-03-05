import { Component, Input } from '@angular/core';
import { FetchDrinksByIngredientService } from 'app/fetch-drinks-by-ingredient.service';
import { first } from 'rxjs';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html'
})
export class NgbdCollapseBasic {
  @Input() IngredientName: string;
  subscription:any;
  info:string[];
  constructor(private fetch:FetchDrinksByIngredientService){
    this.IngredientName = "hej";
    this.info = [];
    }

  ngOnChanges(): void {
    if(this.IngredientName){
      this.subscription = this.fetch.fetchByIngredient(this.IngredientName).pipe(first()).subscribe(data => {
        this.info = Object(JSON.parse(data))["drinks"];
      })
    }
      
    
  }

  public isCollapsed = true;

  getIngredientName(){
    return this.IngredientName;
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
  getURLwithID(idx:any){
    return "/drinkinfo/"  + Object(this.info[idx])["idDrink"];
  }
}