import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classworkbinding',
  templateUrl: './classworkbinding.component.html',
  styleUrls: ['./classworkbinding.component.css']
})
export class ClassworkbindingComponent implements OnInit {
  paraid = "pid";
  colorval: string;
  fontsizeval;
  constructor() { }

  ngOnInit() {
  }

  chngbgcolor(){
    this.colorval = "red";
    return this.colorval;
  }

  chngfont(){
    this.fontsizeval = "60px";
    return this.fontsizeval;
  }

}
