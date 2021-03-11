import { Component, OnInit } from '@angular/core';
import { aboutUsPage } from 'src/app/_Constant/data';
import { TeacherToList } from 'src/app/_models/teacherToList';
import { TeacherService } from 'src/app/_services/teacher.service';

@Component({
  selector: 'app-about-us-u',
  templateUrl: './about-us-u.component.html',
  styleUrls: ['./about-us-u.component.scss']
})
export class AboutUsUComponent implements OnInit {
  DB_const = { aboutUsPage };
  responsiveOptions = [
    {
      breakpoint: '1254px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '1150px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '880px',
      numVisible: 1,
      numScroll: 1,
    }
  ];
  teachers = [
    {
      name: "علیرضا عید",
      post: "موسس و مدیر عامل",
      image: "assets/img/team/1.png",
    },
    {
      name: "مینا جلالی",
      post: "مدیر محتوای آموزشی",
      image: "assets/img/team/2.png",
    },
    {
      name: "سهیل حجازی‌یکتا",
      post: "مدیر آکادمی کارشناسی‌ارشد",
      image: "assets/img/team/3.png",
    },
    {
      name: "تینا نجفی",
      post: "مدیر ارشد فروش، پشتیبانی و عملیات",
      image: "assets/img/team/4.png",
    },
    {
      name: "فاطمه موسوی",
      post: "مدیر واحد عملیات",
      image: "assets/img/team/5.png",
    },
    {
      name: "پردیس حاجی‌طالب",
      post: "مدیر واحد ارتباط با مخاطبین",
      image: "assets/img/team/6.png",
    },
    {
      name: "آریا عیسی‌نیا",
      post: "کارشناس پشتیبانی",
      image: "assets/img/team/7.png",
    },
    {
      name: "شینا عیسی‌نیا",
      post: "کارشناس عملیات",
      image: "assets/img/team/8.png",
    },
    {
      name: "زهرا سمیع",
      post: "دیزاینر",
      image: "assets/img/team/9.png",
    },
    {
      name: "عطیه اکبری",
      post: "دیزاینر",
      image: "assets/img/team/10.png",
    },
    {
      name: "مجید محبی",
      post: "دیزاینر",
      image: "assets/img/team/11.png",
    },
    {
      name: "فائزه نورمندی",
      post: "سوشال منیجر",
      image: "assets/img/team/12.png",
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }




}
