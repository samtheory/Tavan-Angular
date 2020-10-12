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
import { MainIndexComponent } from './views/main/main-index/main-index.component';
import { PanelComponent } from './layouts/panel/panel.component';
import { PANewCourseComponent } from './views/panel-Admin/p-a-newCourse/p-a-newCourse.component';
import { PAAllCoursesComponent } from './views/panel-Admin/p-a-AllCourses/p-a-AllCourses.component';
import { PAEditCourseComponent } from './views/panel-Admin/p-a-edit-course/p-a-edit-course.component';
import { TestComponentViewComponent } from './views/test-component-view/test-component-view.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { LandingProductsAllComponent } from './landing/landing-products-all/landing-products-all.component';
import { LandingIntroComponent } from './landing/landing-intro/landing-intro.component';
import { LandingHomeComponent } from './landing/landing-home/landing-home.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

const routes: Routes = [
  {path:'Test', component: TestComponentViewComponent},

  {
    path: 'index', 
    component: LandingLayoutComponent ,
    children:[  
      {path:'home', component: LandingHomeComponent},
      {path:'about', component: LandingAboutComponent},
      {path:'intro', component: LandingIntroComponent},
      {path:'products', component: LandingProductsAllComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
    
    {path:'home', component: LandingHomeComponent},
   
  { path: 'test', component: TestComponentViewComponent },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: 'newCourse', component: PANewCourseComponent },
      { path: 'allCourses', component: PAAllCoursesComponent }, 
      {path: 'editCourse', component: PAEditCourseComponent},
    ],
  },
  // admin views
  {
    path: 'admin',
    component: PanelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
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
