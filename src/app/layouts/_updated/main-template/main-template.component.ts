import { Component, OnInit, HostListener } from '@angular/core';
import * as DB_const from '../../../_Constant/data'
@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {
  // constant data 
  DB_const = DB_const;
  // show goUp button toggle 
  goUpButtonScroll: boolean = false
  // navigation category mega menu toggle 
  megaMenu: boolean = false;
  // slider menu toggle 
  showSideMenu: boolean = false;

  // this will listen to scroll view of the page 
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const numb = window.scrollY;
    if (numb >= 1000) {
      this.goUpButtonScroll = true;
    }
    else {
      this.goUpButtonScroll = false;
    }
  }

  // scroll to target method 
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  ngOnInit(): void {
  }

}
