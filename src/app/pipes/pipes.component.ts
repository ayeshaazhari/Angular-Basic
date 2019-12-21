import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  percentagevalue = "300000000";
  date = new Date();
  ztext;
  fruits=[
    "Apple",
    "Mango",
    "PineApple",
    "blue Berry",
    "Apple"
  ]

  constructor() { }

  ngOnInit() {
  }

  showpara(ptext){
    console.log(ptext);

  }

}
