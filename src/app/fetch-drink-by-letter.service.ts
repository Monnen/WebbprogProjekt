import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDrinkByLetterService {

  constructor(
    private http: HttpClient
  ) { }

  fetchByLetter(letter: any):  Observable<string>{
    
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter, {responseType: 'text'});
  }
  fetchAlcoholFree():  Observable<string>{
    
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic' , {responseType: 'text'});
  }
}
