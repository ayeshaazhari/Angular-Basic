import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  imgscr = "https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg";
  imgsrc2 = "../assets/img2.png";
  imgid = "idval";
  welcome;
  checkedval1;
  seleVal2;
  seleVal;
  interpolationvalue = "Value from Interpolation";

  constructor() {
    this.seleVal2 = this.seleVal + "123";
  }

  ngOnInit() {
  }

  submit() {
    console.log("Clicked");
  }

  getvalue(username){
    console.log("User entered");
    console.log(username);
    this.welcome = "Welcome " + username;
    return this.welcome;
  }


  gotfocus(){
    console.log("Got focus");
  }

  outofbox(){
    console.log("Blur");
  }

}
