import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/_models/order';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { CourseService } from 'src/app/_services/course.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-p-a-orders',
  templateUrl: './p-a-orders.component.html',
  styleUrls: ['./p-a-orders.component.css']
})
export class PAOrdersComponent implements OnInit {
  orders: Order[];
  pag: Pagination;
  userParams: any;
  constructor(private orderService: OrderService , private toastr: ToastrService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.gerUserFirstPage();
  }

  gerUserFirstPage(){
    this.orderService.getOrders(1 , 10).subscribe((res: PaginatedResult<Order[]>) => {
      this.orders = res.result;
      this.pag = res.pag;
    });
  }

  getOrders(){
    this.orderService.getOrders(this.pag.currentPage , this.pag.itemsPerPage , this.userParams)
    .subscribe((res: PaginatedResult<Order[]>) => {
      this.orders = res.result;
      this.pag = res.pag;
    }, error => {
      this.toastr.error(error);
    });
  }

  loadOrders(){
    this.orderService.getOrders(this.pag.currentPage )
  }

  pageChanged(event: any): void{
    this.pag.currentPage = event.pageIndex + 1;
    this.getOrders();
  }


}
