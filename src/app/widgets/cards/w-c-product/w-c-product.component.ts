import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-w-c-product',
  templateUrl: './w-c-product.component.html',
  styleUrls: ['./w-c-product.component.css']
})
export class WCProductComponent implements OnInit {
  @Input() imageProduct : String = 'assets/img/courses/4.jpg';
  @Input() imageTeacher : String = 'assets/img/user4.jpg';
  @Input() title : String = 'عنوان دوره';
  @Input() teacherName : String = 'اسم استاد';
  @Input() description : String = 'توضیحات دوره';
  @Input() price : String = '200 تومان';
  @Input() prePrice : String = '295 تومان';
  @Input() courseNumbers : Number = 10;
  @Input() StudentsNum : Number = 15;
  @Input() isDiscount : Boolean  = false;









  constructor() { }

  ngOnInit(): void {
  }

}
