import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pc-workshop.component.html',
  styleUrls: ['./pc-workshop.component.css']
})
export class PCWorkshopComponent implements OnInit {




  // ! THIS IS FAKE INFORMATION    


  courseFakeData = [
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-3.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    },
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-1.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    },
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-1.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    },
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-1.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    },
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-1.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    },
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-1.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    },
    {

      title: "دوره آموزشی کامل",
      cost: 22000,
      realCost: 44000,
      img: "assets/img/_usefull/card-3.jpg",
      teacher: "احمد اکبری",
      time: "27 ساعت",
      score: 4.2


    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
