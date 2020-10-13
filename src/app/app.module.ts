import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";




// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/demo-landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { MainIndexComponent } from './views/main/main-index/main-index.component';
import { PanelComponent } from './layouts/panel/panel.component';


// panel views
import { PAAllCoursesComponent } from './views/panel-Admin/p-a-AllCourses/p-a-AllCourses.component';
import { PANewCourseComponent } from './views/panel-Admin/p-a-newCourse/p-a-newCourse.component';
import { PAEditCourseComponent } from './views/panel-Admin/p-a-edit-course/p-a-edit-course.component';
import { AllCourseTableComponent } from './components/myCard/Tables/all-course-table/all-course-table.component';
import { UsersTableComponent } from './components/myCard/Tables/users-table/users-table.component';
import { DiscountTableComponent } from './components/myCard/Tables/discount-table/discount-table.component';
import { SlidShowComponent } from './components/slide-show/slid-show.component';
import { TestComponentViewComponent } from './views/test-component-view/test-component-view.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { LandingNavbarComponent } from './components/navbars/landing-navbar/landing-navbar.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { CardProduct1Component } from './components/cards/card-product1/card-product1.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

// Landing page view
import { LandingHomeComponent } from './views/landing/landing-home/landing-home.component';
import { LandingIntroComponent } from './views/landing/landing-intro/landing-intro.component';
import { LandingProductsAllComponent } from './views/landing/landing-products-all/landing-products-all.component';
import { LandingAboutComponent } from './views/landing/landing-about/landing-about.component';
import { LandingSingleProductComponent } from './views/landing/landing-single-product/landing-single-product.component';

//other

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationDropdownComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    MainIndexComponent,
    PanelComponent,
    PAAllCoursesComponent,
    PANewCourseComponent,
    PAEditCourseComponent,
    AllCourseTableComponent,
    UsersTableComponent,
    DiscountTableComponent,
    SlidShowComponent,
    TestComponentViewComponent,
    LandingNavbarComponent,
    LandingFooterComponent,
    CardProduct1Component,
    LandingHomeComponent,
    LandingProductsAllComponent,
    LandingIntroComponent,
    LandingAboutComponent,
    LandingLayoutComponent,
    LandingSingleProductComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  providers: [{provide :LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
