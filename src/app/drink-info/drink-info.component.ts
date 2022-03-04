import { Component, OnInit } from '@angular/core';
import { FetchDrinkInfoService } from 'app/fetch-drink-info.service';
import { NgbPanel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.css']
})
export class DrinkInfoComponent implements OnInit {
  info;
  constructor(private fetchDInfo: FetchDrinkInfoService) {
    this.info = {};
   }
   

  ngOnInit(): void {
    this.fetchDInfo.fetchById("11872").subscribe(data => {
      this.info = Object(JSON.parse(data)["drinks"][0]);
      console.log(this.info);
    })
  }

 
  getName():string{
    return Object(this.info)["strDrink"]
  }
  getID():string{
    return Object(this.info)["idDrink"]
  }
  getImg():string{
    return Object(this.info)["strDrinkThumb"]
  }
  getInstructions():string{
    return Object(this.info)["strInstructions"]
  }
  getFooterInfo():string{
    return Object(this.info)["strTags"]
  }
  getIngredients():string[]{
    let t = [];
    let idx = 1;
    while(Object(this.info)["strIngredient"+idx]){
      t.push(Object(this.info)["strIngredient"+idx] + " - " + Object(this.info)["strMeasure"+idx])
      idx++;
    }
    return t;
  }
  



}
