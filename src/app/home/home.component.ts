import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count=1;
  additem=false
  item1(){
    console.log("Added to cart" +this.count++)
  
  }
  item2(){
    console.log("Added to cart" +this.count++)
}

}

