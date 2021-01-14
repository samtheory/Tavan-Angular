import { Component, OnInit } from '@angular/core';
import { rules } from 'src/app/_Constant/data';

@Component({
  selector: 'app-rules-u',
  templateUrl: './rules-u.component.html',
  styleUrls: ['./rules-u.component.css']
})
export class RulesUComponent implements OnInit {
DB_const = {rules}
  constructor() { }

  ngOnInit(): void {
  }

}
