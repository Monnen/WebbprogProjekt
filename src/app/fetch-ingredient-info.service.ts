import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchIngredientInfoService {

  constructor(
    private http: HttpClient
  ) { }

  fetchByName(name: any):  Observable<string>{
    
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + name, {responseType: 'text'});
  }
}
