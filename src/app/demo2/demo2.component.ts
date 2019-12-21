import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo-service.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  title="Value of Title By Interpolation";
  courses = ["Full Stack", "Mean Stack" , "Mern Stack"];
  courselist;
  constructor() {
    let service = new DemoService();
    this.courselist = service.getCourses();
   }

   greetings() {
     return "Hello.. This is from Grretings method called inside Interpolation";
   }

  ngOnInit() {
  }

}
