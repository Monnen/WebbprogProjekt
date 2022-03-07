import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sökterm: string;
  constructor(private router: Router) { 
    this.sökterm = "";
  }

  ngOnInit(): void {
  }

  onSubmit(event: any){
    this.sökterm = event.target.sökTerm.value;
    this.router.navigate([this.getURL()])
    
  }

  getURL(){
    return "/searching/" + this.sökterm;
  }

}
