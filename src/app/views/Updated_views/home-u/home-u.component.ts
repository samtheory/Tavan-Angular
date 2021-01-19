import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-home-u',
  templateUrl: './home-u.component.html',
  styleUrls: ['./home-u.component.scss']
})
export class HomeUComponent implements OnInit {
  // ! THIS IS FAKE INFORMATION    
  courseFakeData  = [
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-3.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    }, {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-1.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    }, {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-3.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    }
  ]


  // scroll to target method 
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  ngOnInit(): void {
   
  }

}
