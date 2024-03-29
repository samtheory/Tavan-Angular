import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';



// components for views and layouts

import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';

import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';

import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';

import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';

import { PanelComponent } from './layouts/panel/panel.component';


import { PANewCourseComponent } from './views/panel-Admin/p-a-newCourse/p-a-newCourse.component';
import { PAEditCourseComponent } from './views/panel-Admin/p-a-edit-course/p-a-edit-course.component';
import { AllCourseTableComponent } from './components/myCard/Tables/all-course-table/all-course-table.component';
import { UsersTableComponent } from './components/myCard/Tables/users-table/users-table.component';
import { DiscountTableComponent } from './components/myCard/Tables/discount-table/discount-table.component';
import { SlidShowComponent } from './components/slide-show/slid-show.component';


import { IvyCarouselModule } from 'angular-responsive-carousel';


import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';




import { PASlideShowComponent } from './views/panel-Admin/p-a-slide-show/p-a-slide-show.component';
import { PADiscountComponent } from './views/panel-Admin/p-a-discount/p-a-discount.component';
import { PAAllUserComponent } from './views/panel-Admin/p-a-all-user/p-a-all-user.component';
import { PANewUserComponent } from './views/panel-Admin/p-a-new-user/p-a-new-user.component';
import { PAEditUserComponent } from './views/panel-Admin/p-a-edit-user/p-a-edit-user.component';
import { SlideShowManageAdminComponent } from './components/cards-panel/slide-show-manage-admin/slide-show-manage-admin.component';
import { SlideShowPicAdminComponent } from './components/cards-panel/slide-show-pic-admin/slide-show-pic-admin.component';
import { PADashboardComponent } from './views/panel-Admin/p-a-dashboard/p-a-dashboard.component';
import { CardDiscountTableComponent } from './components/cards-panel/card-discount-table/card-discount-table.component';
import { CardNewUserInfoComponent } from './components/cards-panel/card-new-user-info/card-new-user-info.component';
import { CardNewUserPicComponent } from './components/cards-panel/card-new-user-pic/card-new-user-pic.component';

// other
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { WCProductComponent } from './widgets/cards/w-c-product/w-c-product.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PAAddVideoComponent } from './views/panel-admin/p-a-add-video/p-a-add-video.component';
import { PADiscountEditComponent } from './views/panel-admin/p-a-discount-edit/p-a-discount-edit.component';
import { PADiscountNewComponent } from './views/panel-admin/p-a-discount-new/p-a-discount-new.component';

import { WCCustomerCourseComponent } from './widgets/cards/w-c-customer-course/w-c-customer-course.component';
import { SidebarCustomerComponent } from './components/sidebar-customer/sidebar-customer.component';
import { CustomerPanelComponent } from './layouts/customer-panel/customer-panel.component';
import { JwtModule } from '@auth0/angular-jwt';

import { ErrorInterceptor } from './_intercepters/error.interceptor';
import { ArvanPipe } from './arvan.pipe';

import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_intercepters/loading.interceptor';
import { CourseDetailResolver } from './_resolvers/course-detail.resolver';
import { CourseListResolver } from './_resolvers/course-list-all.resolver';
import { CourseListUserResolver } from './_resolvers/course-list-user.resolver';
import { CourseListAllResolver } from './_resolvers/course-list.resolver';
import { CourseListAllUserResolver } from './_resolvers/course-list-user-all.resolver';
import { CourseListMainResolver } from './_resolvers/course-list-user-dactive.resolver';
import { CourseListMainActiveResolver } from './_resolvers/course-list-user-active.resolver';
import { PhotoListResolver } from './_resolvers/photo-list.resolver';
import { IsAdminGuard } from './_guards/is-admin.guard';
import { IsClientGuard } from './_guards/is-client.guard';

import { CourseDetailMainResolver } from './_resolvers/course-detail-main.resolver';



// .:: Updated View  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import { HomeUComponent } from './views/Updated_views/home-u/home-u.component';
import { LoginUComponent } from './views/Updated_views/login-u/login-u.component';
import { RegisterUComponent } from './views/Updated_views/register-u/register-u.component';
import { SvgLogoComponent } from './_svg/svg-logo/svg-logo.component';
import { MainTemplateComponent } from './layouts/_updated/main-template/main-template.component';

import { MainFooterComponent } from './components/_Updated/main-footer/main-footer.component';
import { SvgWalletComponent } from './_svg/svg-wallet/svg-wallet.component';
import { SvgSkillsComponent } from './_svg/svg-skills/svg-skills.component';
import { SvgUniversalityComponent } from './_svg/svg-universality/svg-universality.component';
import { SvgClockComponent } from './_svg/svg-clock/svg-clock.component';
import { SvgCourseComponent } from './_svg/svg-course/svg-course.component';
import { SvgInternsComponent } from './_svg/svg-interns/svg-interns.component';
import { SvgTeacherComponent } from './_svg/svg-teacher/svg-teacher.component';
import { SvgDotsComponent } from './_svg/svg-dots/svg-dots.component';
import { SvgTransactionMedalComponent } from './_svg/svg-transaction-medal/svg-transaction-medal.component';

import { SvgMedalComponent } from './_svg/svg-medal/svg-medal.component';
import { SvgAparatComponent } from './_svg/svg-aparat/svg-aparat.component';
import { SvgInstagramComponent } from './_svg/svg-instagram/svg-instagram.component';
import { SvgTelegramComponent } from './_svg/svg-telegram/svg-telegram.component';
import { SvgWhatsappComponent } from './_svg/svg-whatsapp/svg-whatsapp.component';
import { SvgLoginComponent } from './_svg/svg-login/svg-login.component';
import { SvgRegisterComponent } from './_svg/svg-register/svg-register.component';
import { MatInputModule } from '@angular/material/input';
import { AboutUsUComponent } from './views/Updated_views/about-us-u/about-us-u.component';
import { NotFoundComponent } from './views/Updated_views/not-found/not-found.component';
import { ContactUsUComponent } from './views/Updated_views/contact-us-u/contact-us-u.component';
import { RulesUComponent } from './views/Updated_views/rules-u/rules-u.component';
import { FAQUComponent } from './views/Updated_views/faq-u/faq-u.component';
import { SuccessPurchaseUComponent } from './views/Updated_views/success-purchase-u/success-purchase-u.component';
import { SvgNotFoundComponent } from './_svg/svg-not-found/svg-not-found.component';
import { SvgPhoneComponent } from './_svg/svg-phone/svg-phone.component';
import { SvgMobileComponent } from './_svg/svg-mobile/svg-mobile.component';
import { SvgEmailComponent } from './_svg/svg-email/svg-email.component';
import { SvgLocationComponent } from './_svg/svg-location/svg-location.component';
import { SvgPostcodeComponent } from './_svg/svg-postcode/svg-postcode.component';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PATicketComponent } from './views/panel-Admin/p-a-ticket/p-a-ticket.component';
import { PATicketSingleComponent } from './views/panel-Admin/p-a-ticket-single/p-a-ticket-single.component';
import { PATestComponent } from './views/panel-Admin/p-a-test/p-a-test.component';
import { PATeachersComponent } from './views/panel-Admin/p-a-teachers/p-a-teachers.component';
import { PATeacherEditeComponent } from './views/panel-Admin/p-a-teacher-edite/p-a-teacher-edite.component';
import { PATeacherNewComponent } from './views/panel-Admin/p-a-teacher-new/p-a-teacher-new.component';
import { PAOrdersComponent } from './views/panel-Admin/p-a-orders/p-a-orders.component';
import { ButtonBlueComponent } from './components/_Updated/button-blue/button-blue.component';
import { CardCourseComponent } from './components/_Updated/card-course/card-course.component';
import { AuthStatusBarComponent } from './components/_Updated/auth-status-bar/auth-status-bar.component';
import { SvgFaqComponent } from './_svg/svg-faq/svg-faq.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { UPanelCustomerComponent } from './views/upanel-customer/upanel-customer.component';
import { PCVideosComponent } from './views/upanel-customer/pc-videos/pc-videos.component';
import { PCWorkshopComponent } from './views/upanel-customer/pc-workshop/pc-workshop.component';
import { PCProfileComponent } from './views/upanel-customer/pc-profile/pc-profile.component';
import { TeacherComponent } from './views/Updated_views/teacher/teacher.component';
import { AllTeachersComponent } from './views/Updated_views/all-teachers/all-teachers.component';
import { SearchComponent } from './views/Updated_views/search/search.component';
import { WebinarComponent } from './views/Updated_views/webinar/webinar.component';
import { DropdownModule } from 'primeng/dropdown';
import { CourseMainDetailResolver } from './_resolvers/coursemain-detail.resolver';
import { TeacherDetailResolver } from './_resolvers/teacher-detail.resolver';
import { SearchSectionComponent } from './components/_Updated/search-section/search-section.component';
import { PasswordUpdateComponent } from './views/Updated_views/password-update/password-update.component';
import { PaginatorModule } from 'primeng/paginator';
import { CustomerCardComponent } from './components/_Updated/customer-card/customer-card.component';
import { PersianDatePipe } from './pipes/PersianDate.pipe';
import { VideosUComponent } from './views/Updated_views/videos-u/videos-u.component';
import { ActiveComponent } from './views/Updated_views/active/active.component';
import { SuccessPurchaseFreeComponent } from './views/Updated_views/success-purchase-free/success-purchase-free.component';
import { UploadComponent } from './views/panel-admin/upload/upload.component';
import { TestComponent } from './views/test/test.component';
import { SkyroomComponent } from './views/Updated_views/skyroom/skyroom.component';
export function tokenGeter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NotificationDropdownComponent,
    IndexDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterAdminComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    PanelComponent,
    PersianDatePipe,
    PANewCourseComponent,
    PAEditCourseComponent,
    AllCourseTableComponent,
    UsersTableComponent,
    DiscountTableComponent,
    SlidShowComponent,
  
    PASlideShowComponent,
    PADiscountComponent,
    PAAllUserComponent,
    PANewUserComponent,
    PAEditUserComponent,
    SlideShowManageAdminComponent,
    SlideShowPicAdminComponent,
    PADashboardComponent,
    CardDiscountTableComponent,
    CardNewUserInfoComponent,
    CardNewUserPicComponent,
    WCProductComponent,
    PAAddVideoComponent,
    PADiscountEditComponent,
    PADiscountNewComponent,
    WCCustomerCourseComponent,
    SidebarCustomerComponent,
    CustomerPanelComponent,
    ArvanPipe,
    HomeUComponent,
    LoginUComponent,
    RegisterUComponent,
    SvgLogoComponent,
    MainTemplateComponent,
    MainFooterComponent,
    SvgWalletComponent,
    SvgSkillsComponent,
    SvgUniversalityComponent,
    SvgClockComponent,
    SvgCourseComponent,
    SvgInternsComponent,
    SvgTeacherComponent,
    SvgDotsComponent,
    SvgTransactionMedalComponent,
    SvgMedalComponent,
    SvgAparatComponent,
    SvgInstagramComponent,
    SvgTelegramComponent,
    SvgWhatsappComponent,
    SvgLoginComponent,
    SvgRegisterComponent,
    AboutUsUComponent,
    NotFoundComponent,
    ContactUsUComponent,
    RulesUComponent,
    FAQUComponent,
    SuccessPurchaseUComponent,
    SvgNotFoundComponent,
    SvgPhoneComponent,
    SvgMobileComponent,
    SvgEmailComponent,
    SvgLocationComponent,
    SvgPostcodeComponent,
    PATicketComponent,
    PATicketSingleComponent,
    PATestComponent,
    PATeachersComponent,
    PATeacherEditeComponent,
    PATeacherNewComponent,
    PAOrdersComponent,
    ButtonBlueComponent,
    CardCourseComponent,
    AuthStatusBarComponent,
    SvgFaqComponent,
    UPanelCustomerComponent,
    PCVideosComponent,
    PCWorkshopComponent,
    PCProfileComponent,
    TeacherComponent,
    AllTeachersComponent,
    SearchComponent,
    WebinarComponent,
    SearchSectionComponent,
    PasswordUpdateComponent,
    CustomerCardComponent,
    VideosUComponent,
    ActiveComponent,
    SuccessPurchaseFreeComponent,
    UploadComponent,
    TestComponent,
    SkyroomComponent,
  ],
  imports: [
    PaginatorModule,
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    CarouselModule,
    NgPersianDatepickerModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    CKEditorModule,
    DpDatePickerModule,
    ButtonModule,
    MatExpansionModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGeter,
        allowedDomains: ['tavanplus.co', 'tavanplus.iran.liara.run', 'localhost:5000' , 'tavan.iran.liara.run'],
        disallowedRoutes: ['tavanplus.co/auth'],
      },
    }),
    NgxSpinnerModule,
  ],
  providers: [
    IsAdminGuard,
    IsClientGuard,
    PhotoListResolver,
    CourseDetailResolver,
    CourseMainDetailResolver,
    CourseDetailMainResolver,
    TeacherDetailResolver,
    CourseListResolver,
    CourseListUserResolver,
    CourseListAllResolver,
    CourseListAllUserResolver,
    CourseListMainActiveResolver,
    CourseListMainResolver,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
