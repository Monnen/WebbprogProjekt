import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }  
}

