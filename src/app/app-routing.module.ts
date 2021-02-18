// * DEpendency
import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules } from '@angular/router';

// .::  Layouts ::.  --::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::
import { PanelComponent } from './layouts/panel/panel.component';
import { MainTemplateComponent } from './layouts/_updated/main-template/main-template.component';

// .::  Panel ADMIN ::.  --::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::
import { PANewCourseComponent } from './views/panel-Admin/p-a-newCourse/p-a-newCourse.component';

import { PAEditCourseComponent } from './views/panel-Admin/p-a-edit-course/p-a-edit-course.component';
import { PAAllUserComponent } from './views/panel-Admin/p-a-all-user/p-a-all-user.component';
import { PANewUserComponent } from './views/panel-Admin/p-a-new-user/p-a-new-user.component';
import { PASlideShowComponent } from './views/panel-Admin/p-a-slide-show/p-a-slide-show.component';
import { PADiscountComponent } from './views/panel-Admin/p-a-discount/p-a-discount.component';
import { PADashboardComponent } from './views/panel-Admin/p-a-dashboard/p-a-dashboard.component';
import { PAAddVideoComponent } from './views/panel-admin/p-a-add-video/p-a-add-video.component';
import { PAEditUserComponent } from './views/panel-Admin/p-a-edit-user/p-a-edit-user.component';
import { PADiscountEditComponent } from './views/panel-admin/p-a-discount-edit/p-a-discount-edit.component';
import { PADiscountNewComponent } from './views/panel-admin/p-a-discount-new/p-a-discount-new.component';
import { PATicketComponent } from './views/panel-Admin/p-a-ticket/p-a-ticket.component';
import { PATestComponent } from './views/panel-Admin/p-a-test/p-a-test.component';
import { PATicketSingleComponent } from './views/panel-Admin/p-a-ticket-single/p-a-ticket-single.component';
import { PATeacherNewComponent } from './views/panel-Admin/p-a-teacher-new/p-a-teacher-new.component';
import { PATeacherEditeComponent } from './views/panel-Admin/p-a-teacher-edite/p-a-teacher-edite.component';
import { PATeachersComponent } from './views/panel-Admin/p-a-teachers/p-a-teachers.component';
import { PAOrdersComponent } from './views/panel-Admin/p-a-orders/p-a-orders.component';


// ::   RESOLVERS  ::  --::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::
import { CourseDetailResolver } from './_resolvers/course-detail.resolver';
import { CourseListAllResolver } from './_resolvers/course-list.resolver';
import { CategoryListResolver } from './_resolvers/category-list.resolver';
import { TeacherListResolver } from './_resolvers/teacher-list.resolver';


// ::   Guard  ::  --::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::
import { IsAdminGuard } from './_guards/is-admin.guard';


// .::  Landing Page ::.  --::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::
import { HomeUComponent } from './views/Updated_views/home-u/home-u.component';
import { LoginUComponent } from './views/Updated_views/login-u/login-u.component';
import { RegisterUComponent } from './views/Updated_views/register-u/register-u.component';
import { AboutUsUComponent } from './views/Updated_views/about-us-u/about-us-u.component';
import { ContactUsUComponent } from './views/Updated_views/contact-us-u/contact-us-u.component';
import { FAQUComponent } from './views/Updated_views/faq-u/faq-u.component';
import { NotFoundComponent } from './views/Updated_views/not-found/not-found.component';
import { RulesUComponent } from './views/Updated_views/rules-u/rules-u.component';
import { SuccessPurchaseUComponent } from './views/Updated_views/success-purchase-u/success-purchase-u.component';
import { AllTeachersComponent } from './views/Updated_views/all-teachers/all-teachers.component';
import { TeacherComponent } from './views/Updated_views/teacher/teacher.component';
import { SearchComponent } from './views/Updated_views/search/search.component';
import { WebinarComponent } from './views/Updated_views/webinar/webinar.component';
import { PasswordUpdateComponent } from './views/Updated_views/password-update/password-update.component';


// .::  CUSTOMER panel ::.  --::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::-::
import { UPanelCustomerComponent } from './views/upanel-customer/upanel-customer.component';
import { PCProfileComponent } from './views/upanel-customer/pc-profile/pc-profile.component';
import { PCWorkshopComponent } from './views/upanel-customer/pc-workshop/pc-workshop.component';
import { PCVideosComponent } from './views/upanel-customer/pc-videos/pc-videos.component';
import { VideosUComponent } from './views/Updated_views/videos-u/videos-u.component';
import { ActiveComponent } from './views/Updated_views/active/active.component';
//un organized


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
      { path: 'teacher/:id', component: TeacherComponent},
      { path: 'search', component: SearchComponent },
      { path: 'videos', component: VideosUComponent },
      { path: 'webinars', component: ActiveComponent },
      { path: 'webinar/:id', component: WebinarComponent },
      { path: 'checkpayment/:id', component: SuccessPurchaseUComponent },
      { path: '', component: HomeUComponent },
      { path: 'pass/:username/:id', component: PasswordUpdateComponent },
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

  // .:: admin views
  {
    path: 'admin',
    
    runGuardsAndResolvers: 'always',
    canActivate: [IsAdminGuard],   
    component: PanelComponent,
    children: [
      { path: 'dashboard', component: PADashboardComponent, resolve: { courses: CourseListAllResolver } },
      { path: 'addVideo', component: PAAddVideoComponent },
     
      { path: 'newCourse', component: PANewCourseComponent, resolve: { categories: CategoryListResolver, teachers: TeacherListResolver } },
      { path: 'ticket', component: PATicketComponent },
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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
