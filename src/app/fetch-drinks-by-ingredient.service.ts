import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDrinksByIngredientService {

  constructor(private http: HttpClient) { }

  fetchByIngredient(ingredient: any):  Observable<string>{
    
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient, {responseType: 'text'});
  }
}
