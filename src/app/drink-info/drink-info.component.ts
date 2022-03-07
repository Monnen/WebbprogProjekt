import { Component, OnInit } from '@angular/core';
import { FetchDrinkInfoService } from 'app/fetch-drink-info.service';
import { NgbPanel } from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {NgbdCollapseBasic} from 'app/collapse/collapse.component';

@Component({
  selector: 'app-drink-info',
  templateUrl: './drink-info.component.html',
  styleUrls: ['./drink-info.component.css']
})
export class DrinkInfoComponent implements OnInit {
  info;
  id : any;
  constructor(private fetchDInfo: FetchDrinkInfoService, private route:ActivatedRoute) {
    this.info = {};
    this.id = "";
   }
   

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchDInfo.fetchById(this.id).subscribe(data => {
      this.info = Object(JSON.parse(data)["drinks"][0]);
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
  getIngredientUrl(name:any){
    return "/ingredientinfo/" + name.split(" -")[0] ;
  }
  



}
