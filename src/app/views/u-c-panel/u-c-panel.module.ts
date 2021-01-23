import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UCPanelRoutingModule } from './u-c-panel-routing.module';
import { UCPanelComponent } from './u-c-panel.component';

// // component

//  page 
import { ProfileComponent } from './profile/profile.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    UCPanelComponent,
    ProfileComponent,
    WorkshopComponent,
    VideosComponent,
   
  ],
  imports: [
    CommonModule,
    UCPanelRoutingModule
  ]
})
export class UCPanelModule { }
