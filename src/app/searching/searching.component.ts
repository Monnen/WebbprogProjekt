import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import{ActivatedRoute, Router} from '@angular/router';
//import {HttpClient} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


const drinkar = ['Margarita', 'GT'];

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css'],
  styles: ['.form-control { width: 300px; }']
})
export class SearchingComponent implements OnInit {
  public model: any;

  searchTerm: String = "";

  
  constructor(private route:ActivatedRoute, private router:Router) { }

  sendData(event: any) {
    console.log(event.target.value);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (['params.searchTerm'])
        [this.searchTerm] = ['params.searchTerm'];
    })
  }

  // search():void{
  //   if(this.searchTerm)
  //   this.router.navigateByUrl('/search/' + this.searchTerm);
  // }

   search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
     text$.pipe(
       debounceTime(200),
       distinctUntilChanged(),
       map(term => term.length < 2 ? []
         : drinkar.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
     )


     enteredSearchValue: string = '';
    
     @Output()
     searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

     onSearchTextChanged(){
       this.searchTextChanged.emit(this.enteredSearchValue);
     }

}