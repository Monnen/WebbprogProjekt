import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchRandomDrinkService {
  constructor(
    private http: HttpClient
  ) { }

  log(msg: any)   { console.log(msg); }
  fetchRandom():  Observable<string>{
    
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', {responseType: 'text'});
  }
}
