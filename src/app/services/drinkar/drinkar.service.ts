import { Injectable } from '@angular/core';
import { Drinkar } from 'app/shared/models/Drinkar';

@Injectable({
  providedIn: 'root'
})
export class DrinkarService {

  constructor() { }

  getAll():Drinkar[]{
    return [
      {
      name:'GT'
      }
    ]
  }
}
