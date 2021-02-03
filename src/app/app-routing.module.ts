import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/demo-landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';

import { PanelComponent } from './layouts/panel/panel.component';
import { PANewCourseComponent } from './views/panel-Admin/p-a-newCourse/p-a-newCourse.component';
import { PAAllCoursesComponent } from './views/panel-Admin/p-a-AllCourses/p-a-AllCourses.component';
import { PAEditCourseComponent } from './views/panel-Admin/p-a-edit-course/p-a-edit-course.component';
import { TestComponentViewComponent } from './views/test-component-view/test-component-view.component';
import { LandingAboutComponent } from './views/landing/landing-about/landing-about.component';
import { LandingProductsAllComponent } from './views/landing/landing-products-all/landing-products-all.component';
import { LandingIntroComponent } from './views/landing/landing-intro/landing-intro.component';
import { LandingHomeComponent } from './views/landing/landing-home/landing-home.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { LandingSingleProductComponent } from './views/landing/landing-single-product/landing-single-product.component';
import { PAAllUserComponent } from './views/panel-Admin/p-a-all-user/p-a-all-user.component';
import { PANewUserComponent } from './views/panel-Admin/p-a-new-user/p-a-new-user.component';
import { PASlideShowComponent } from './views/panel-Admin/p-a-slide-show/p-a-slide-show.component';
import { PADiscountComponent } from './views/panel-Admin/p-a-discount/p-a-discount.component';
import { PADashboardComponent } from './views/panel-Admin/p-a-dashboard/p-a-dashboard.component';
import { PAAddVideoComponent } from './views/panel-admin/p-a-add-video/p-a-add-video.component';
import { PAEditUserComponent } from './views/panel-Admin/p-a-edit-user/p-a-edit-user.component';
import { PADiscountEditComponent } from './views/panel-admin/p-a-discount-edit/p-a-discount-edit.component';
import { PADiscountNewComponent } from './views/panel-admin/p-a-discount-new/p-a-discount-new.component';
import { PCDashboardComponent } from './views/panel-Customer/p-c-dashboard/p-c-dashboard.component';
import { PCActiveCoursesComponent } from './views/panel-Customer/p-c-active-courses/p-c-active-courses.component';
import { PCCourseSingleDetailComponent } from './views/panel-Customer/p-c-course-single-detail/p-c-course-single-detail.component';
import { PCFinnishedCoursesComponent } from './views/panel-Customer/p-c-finnished-courses/p-c-finnished-courses.component';
import { PCEditProfileComponent } from './views/panel-Customer/p-c-edit-profile/p-c-edit-profile.component';
import { CustomerPanelComponent } from './layouts/customer-panel/customer-panel.component';
import { CourseDetailResolver } from './_resolvers/course-detail.resolver';
import { CourseListResolver } from './_resolvers/course-list-all.resolver';
import { CourseListUserResolver } from './_resolvers/course-list-user.resolver';
import { CourseListAllResolver } from './_resolvers/course-list.resolver';
import { CourseListAllUserResolver } from './_resolvers/course-list-user-all.resolver';
import { CourseListMainActiveResolver } from './_resolvers/course-list-user-active.resolver';
import { CourseListMainResolver } from './_resolvers/course-list-user-dactive.resolver';
import { PhotoListResolver } from './_resolvers/photo-list.resolver';
import { IsAdminGuard } from './_guards/is-admin.guard';
import { IsClientGuard } from './_guards/is-client.guard';
import { PayChechComponent } from './views/landing/pay-chech/pay-chech.component';
import { CourseDetailMainResolver } from './_resolvers/course-detail-main.resolver';
import { PCDactiveCourseComponent } from './views/panel-Customer/p-c-dactive-course/p-c-dactive-course.component';
import { HomeUComponent } from './views/Updated_views/home-u/home-u.component';
import { LoginUComponent } from './views/Updated_views/login-u/login-u.component';
import { RegisterUComponent } from './views/Updated_views/register-u/register-u.component';
import { MainTemplateComponent } from './layouts/_updated/main-template/main-template.component';
import { AboutUsUComponent } from './views/Updated_views/about-us-u/about-us-u.component';
import { ContactUsUComponent } from './views/Updated_views/contact-us-u/contact-us-u.component';
import { FAQUComponent } from './views/Updated_views/faq-u/faq-u.component';
import { NotFoundComponent } from './views/Updated_views/not-found/not-found.component';
import { RulesUComponent } from './views/Updated_views/rules-u/rules-u.component';
import { SuccessPurchaseUComponent } from './views/Updated_views/success-purchase-u/success-purchase-u.component';
import { PATicketComponent } from './views/panel-Admin/p-a-ticket/p-a-ticket.component';
import { PATicketSingleComponent } from './views/panel-Admin/p-a-ticket-single/p-a-ticket-single.component';
import { PATestComponent } from './views/panel-Admin/p-a-test/p-a-test.component';
import { PATeacherNewComponent } from './views/panel-Admin/p-a-teacher-new/p-a-teacher-new.component';
import { PATeacherEditeComponent } from './views/panel-Admin/p-a-teacher-edite/p-a-teacher-edite.component';
import { PATeachersComponent } from './views/panel-Admin/p-a-teachers/p-a-teachers.component';
import { PAOrdersComponent } from './views/panel-Admin/p-a-orders/p-a-orders.component';
import { CategoryListResolver } from './_resolvers/category-list.resolver';
import { TeacherListResolver } from './_resolvers/teacher-list.resolver';
import { UPanelCustomerComponent } from './views/upanel-customer/upanel-customer.component';
import { PCProfileComponent } from './views/upanel-customer/pc-profile/pc-profile.component';
import { PCWorkshopComponent } from './views/upanel-customer/pc-workshop/pc-workshop.component';
import { PCVideosComponent } from './views/upanel-customer/pc-videos/pc-videos.component';
import { AllTeachersComponent } from './views/Updated_views/all-teachers/all-teachers.component';
import { TeacherComponent } from './views/Updated_views/teacher/teacher.component';
import { SearchComponent } from './views/Updated_views/search/search.component';
import { WebinarComponent } from './views/Updated_views/webinar/webinar.component';
import { TeacherDetailResolver } from './_resolvers/teacher-detail.resolver';


const routes: Routes = [

  //.:: Main Page Route ::.
  {
    path: '', component: MainTemplateComponent, children: [

      { path: 'login', component: LoginUComponent },
      { path: 'register', component: RegisterUComponent },

      { path: 'about', component: AboutUsUComponent },
      { path: 'contact', component: ContactUsUComponent },
      { path: 'faq', component: FAQUComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'rules', component: RulesUComponent },
      { path: 'teachers', component: AllTeachersComponent },
      { path: 'teacher/:id', component: TeacherComponent },
      { path: 'search', component: SearchComponent },
      { path: 'webinar', component: WebinarComponent },
      { path: 'success-purchase', component: SuccessPurchaseUComponent },
      { path: '', component: HomeUComponent },

      {
        path: 'customer-panel', component: UPanelCustomerComponent,
         children: [
    
          { path: 'profile', component: PCProfileComponent },
          { path: 'workshop', component: PCWorkshopComponent },
          { path: 'videos', component: PCVideosComponent },
          { path: '', redirectTo: 'videos', pathMatch: 'full' }, 

        ]
      },
    ],
  },
  // landing Page views  #I COMMENT THESE ROUTE FOR DEVELOP
  // {
  //   path: '',
  //   component: LandingLayoutComponent,
  //   children: [
  //     { path: 'home', component: LandingHomeComponent , resolve: { photos: PhotoListResolver} },
  //     { path: 'products/Single/:id', component: LandingSingleProductComponent , resolve: {course : CourseDetailMainResolver}},
  //     { path: 'about', component: LandingAboutComponent },
  //     { path: 'intro', component: LandingIntroComponent },
  //     { path: 'products/:isActive', component: LandingProductsAllComponent , resolve: {courses : CourseListResolver}},
  //     { path: 'checkpayment/:id', component: PayChechComponent },
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   ]
  // },


  // admin views
  {
    path: 'admin',
    // ! THESE two line MUST BE un comment 
    // runGuardsAndResolvers: 'always',
    // canActivate: [IsAdminGuard],   
    component: PanelComponent,
    children: [
      { path: 'dashboard', component: PADashboardComponent, resolve: { courses: CourseListAllResolver } },
      { path: 'addVideo', component: PAAddVideoComponent },
      { path: 'allCourses', component: PAAllCoursesComponent },
      { path: 'newCourse', component: PANewCourseComponent, resolve: { categories: CategoryListResolver, teachers: TeacherListResolver } },
      { path: 'ticket', component: PATicketComponent },
      // ! DELETE this ---------------------------------\/---
      { path: 'test', component: PATestComponent },
      // ! DELETE this ---------------------------------/\---
      { path: 'teacher', component: PATeachersComponent },
      { path: 'teacher-edit/:id', component: PATeacherEditeComponent },
      { path: 'teacher-new', component: PATeacherNewComponent },
      { path: 'orders', component: PAOrdersComponent },
      { path: 'ticket-single/:id', component: PATicketSingleComponent },
      { path: 'editCourse/:id', component: PAEditCourseComponent, resolve: { course: CourseDetailResolver, categories: CategoryListResolver,
      teachers: TeacherListResolver } },
      { path: 'AllUsers', component: PAAllUserComponent },
      { path: 'newUser', component: PANewUserComponent },
      { path: 'EditUser/:id', component: PAEditUserComponent },
      { path: 'slideShow', component: PASlideShowComponent },
      { path: 'discount', component: PADiscountComponent },
      { path: 'EditDiscount/:id', component: PADiscountEditComponent },
      { path: 'NewDiscount', component: PADiscountNewComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  // Customer Panel views
  {
    path: 'Customer',
    runGuardsAndResolvers: 'always',
    canActivate: [IsClientGuard],
    component: CustomerPanelComponent,
    children: [
      { path: 'dashboard', component: PCDashboardComponent, resolve: { courses: CourseListAllUserResolver } },
      { path: 'activeCourses', component: PCActiveCoursesComponent },
      { path: 'dactiveCourses', component: PCDactiveCourseComponent },
      { path: 'SingleCourseDetails/:id', component: PCCourseSingleDetailComponent, resolve: { course: CourseDetailResolver } },
      { path: 'FinnishCourses/:isActive', component: PCFinnishedCoursesComponent, resolve: { courses: CourseListUserResolver } },
      { path: 'Profile', component: PCEditProfileComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },




  // ::::::::::::::::::::::::::::::::::::::::::::::::::::
  //! -----> Here are some old Route USelesssss
  // Just for dev testing 
  // { path: 'Test', component: TestComponentViewComponent },
  // auth views
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



  // no layout views
  // { path: 'profile', component: ProfileComponent },
  // { path: 'landing', component: LandingComponent },
  // { path: '', component: IndexComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
