import { Component, OnInit } from "@angular/core";
declare const main :any;
@Component({
  selector: "app-main-index",
  templateUrl: "./main-index.component.html",
  styleUrls: ["./main-index.component.css"],
})
export class MainIndexComponent implements OnInit {
  constructor( ) {
    
  }
  ngAfterContentInit(){
    
    main();
    
  }
  ngOnInit() {

  }


 
}
