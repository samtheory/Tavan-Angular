import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [


  // landing Page views
  {
    path: 'index',
    component: LandingLayoutComponent,
    children: [
      { path: 'home', component: LandingHomeComponent },
      { path: 'products/Single/:id', component: LandingSingleProductComponent },
      { path: 'about', component: LandingAboutComponent },
      { path: 'intro', component: LandingIntroComponent },
      { path: 'products/:isActive', component: LandingProductsAllComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  // admin views
  {
    path: 'admin',
    component: PanelComponent,
    children: [
      { path: 'dashboard', component: PADashboardComponent },
      { path: 'addVideo', component: PAAddVideoComponent },
      { path: 'allCourses', component: PAAllCoursesComponent },
      { path: 'newCourse', component: PANewCourseComponent },
      { path: 'editCourse/:id', component: PAEditCourseComponent },
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
    component: CustomerPanelComponent,
    children: [
      { path: 'dashboard', component: PCDashboardComponent },
      { path: 'activeCourses', component: PCActiveCoursesComponent },
      { path: 'SingleCourseDetails/:id', component: PCCourseSingleDetailComponent },
      { path: 'FinnishCourses', component: PCFinnishedCoursesComponent },
      { path: 'Profile', component: PCEditProfileComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },




  // ::::::::::::::::::::::::::::::::::::::::::::::::::::
  //! -----> Here are some old Route USelesssss
  // Just for dev testing 
  { path: 'Test', component: TestComponentViewComponent },
  // auth views
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // no layout views
  { path: 'profile', component: ProfileComponent },
  { path: 'landing', component: LandingComponent },
  { path: '', component: IndexComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
