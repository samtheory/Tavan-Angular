import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-u',
  templateUrl: './home-u.component.html',
  styleUrls: ['./home-u.component.scss']
})
export class HomeUComponent implements OnInit {
  
  

  // scroll to target method 
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  ngOnInit(): void {
   
  }

}
