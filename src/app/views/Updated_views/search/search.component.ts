import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  responsiveOptions = [
    {
      breakpoint: '1254px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1150px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '880px',
      numVisible: 1,
      numScroll: 1
    }
  ];
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
