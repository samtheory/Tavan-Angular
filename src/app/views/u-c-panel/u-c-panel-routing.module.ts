import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// < TEMPLATE >
import { UCPanelComponent } from './u-c-panel.component';
//  < PAGE >
import { ProfileComponent } from './profile/profile.component';
import { VideosComponent } from './videos/videos.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [{ path: '', component: UCPanelComponent ,children :[
 {path: 'profile' , component: ProfileComponent},
 {path: 'workshop' , component: WorkshopComponent},
 {path: 'videos' , component: VideosComponent},

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UCPanelRoutingModule { }
