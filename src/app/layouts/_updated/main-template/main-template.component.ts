import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/_models/category';
import { Photo } from 'src/app/_models/photo';
import { AuthService } from 'src/app/_services/auth.service';
import { CategoryService } from 'src/app/_services/category.service';
import { PhotoService } from 'src/app/_services/photo.service';
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
  // page text banner toggle 
  textBannerIsActive: boolean = true;

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
 
  categories: Category[];
  photos: Photo[];

  constructor(private categoryService: CategoryService , private authService: AuthService, private toastr: ToastrService,
     private router: Router, private photoService: PhotoService){

  }

  ngOnInit(): void {
    this.getCategories();
    this.getphotos();

  }


  getCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  getphotos(){
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }


  loggedIn() {
    return this.authService.logedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.toastr.success('loged out successfully');
    this.router.navigate(['/']);
  }


  role() {
    const role = this.authService.decodeToken.role;
    if (role === 'admin') {
      return true;
    }
    return false;
  }

}
