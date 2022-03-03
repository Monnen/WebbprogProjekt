import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Drink{
  
  constructor(
    public strDrink: string,
    public strDrinkThumb: HTMLImageElement,
    public idDrink: number
  ){

  }
}

@Component({
  selector: 'app-popular-drinks',
  templateUrl: './popular-drinks.component.html',
  styleUrls: ['./popular-drinks.component.css']
})
export class PopularDrinksComponent implements OnInit {
  
  drinks: any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    .subscribe(Response => {
      console.log(Response);
      this.drinks = Response;
    });
  }  
}

