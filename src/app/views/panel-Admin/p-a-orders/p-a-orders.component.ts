import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Coursenamelist } from 'src/app/_models/coursenamelist';
import { Order } from 'src/app/_models/order';
import { ExcelResult, PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { CourseService } from 'src/app/_services/course.service';
import { FileService } from 'src/app/_services/file.service';
import { OrderService } from 'src/app/_services/order.service';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-p-a-orders',
  templateUrl: './p-a-orders.component.html',
  styleUrls: ['./p-a-orders.component.css']
})
export class PAOrdersComponent implements OnInit {
  orders: Order[];
  courses: Coursenamelist[];
  pag: Pagination;
  userParams: any = {};
  constructor(private http: HttpClient,private orderService: OrderService , private toastr: ToastrService,
     private courseService: CourseService, private fileService: FileService) { }

  ngOnInit(): void {
    this.gerUserFirstPage();
    this.getCourses();
    this.userParams.productId = '';
    this.userParams.isActive = '';
  }

  gerUserFirstPage(){
    this.orderService.getOrders(1 , 10).subscribe((res: PaginatedResult<Order[]>) => {
      this.orders = res.result;
      this.pag = res.pag;
    });
  }

  getCourses(){
    this.courseService.getCoursesList().subscribe(courses => {
      this.courses = courses;
    })
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
    this.orderService.getOrders(this.pag.currentPage , this.pag.itemsPerPage, this.userParams)
    .subscribe((res: PaginatedResult<Order[]>) => {
      this.orders = res.result;
      this.pag = res.pag;
    }, error => {
      this.toastr.error(error);
    });
  }

  getExcel(){
   this.orderService.getExcelOrders(this.userParams).subscribe(response => {
       this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
     console.log(response);
    });
  }

  download() {
    //this.fileService.downloadFile().subscribe(response => {
		this.fileService.download().subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
		  saveAs(blob, 'orders.xlsx');
		//}), error => console.log('Error downloading the file'),
		}), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
                 () => console.info('File downloaded successfully');
  }


 

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url , "_blank");
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
}

pageChanged(event: any): void{
  this.pag.currentPage = event.page + 1;
  this.getOrders();
}


}
