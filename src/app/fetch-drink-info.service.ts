import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDrinkInfoService {

  constructor(
    private http: HttpClient
  ) { }


  fetchById(id: any):  Observable<string>{
    
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id, {responseType: 'text'});
  }
}
