import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './Program-Status/statistics/statistics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PipelineDataComponent } from './pipeline-data/pipeline-data.component';
import { AdminDashboardComponent } from './admin-dashbaord/admin-dashbaord.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {


    path:"",
    children:[
      {path:"home/home",title:"Home",component:HomePageComponent},
      {path:"home/statistics",title:"Program Status",component: StatisticsComponent},
      {path:"dashboard/pipeline",title:"Trends",component: PipelineDataComponent},
      {path:"dashboard/admin",title:"Trends",component: AdminDashboardComponent},
      { path: 'user/edit/:id',title:"Edit User", component: UserEditComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardsRoutingModule { }
