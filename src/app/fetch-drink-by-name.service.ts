import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDrinkByNameService {

  constructor(
    private http: HttpClient
  ) { }

  log(msg: any)   { console.log(msg); }
  fetchByName(name: any):  Observable<string>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name, {responseType: 'text'});
  }

  }


