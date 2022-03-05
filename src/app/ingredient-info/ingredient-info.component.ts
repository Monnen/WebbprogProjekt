import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchIngredientInfoService } from 'app/fetch-ingredient-info.service';

@Component({
  selector: 'app-ingredient-info',
  templateUrl: './ingredient-info.component.html',
  styleUrls: ['./ingredient-info.component.css']
})
export class IngredientInfoComponent implements OnInit {
  name:any;
  info:any;
  constructor(private fetchIngredient: FetchIngredientInfoService,private route:ActivatedRoute) {
    this.name = "";
    this.info = {};
   }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.fetchIngredient.fetchByName(this.name).subscribe(data => {
      this.info = Object(JSON.parse(data)["ingredients"][0]);
    })
    
  }
  getDescription(){
    if(Object(this.info)["strDescription"]){
      return Object(this.info)["strDescription"];  
    }
    return "No description available." 
  }
  getName(){
    return Object(this.info)["strIngredient"]
  }
  getImg(){
    if(Object(this.info)["strIngredient"]){
      return "https://www.thecocktaildb.com/images/ingredients/" + Object(this.info)["strIngredient"] + ".png";
    }
    return "";
    
  }

}
