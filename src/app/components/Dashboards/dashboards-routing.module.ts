import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './Program-Status/statistics/statistics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PipelineDataComponent } from './pipeline-data/pipeline-data.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {


    path:"",
    children:[
      {path:"home/home",title:"Home",component:HomePageComponent},
      {path:"home/statistics",title:"Program Status",component: StatisticsComponent},
      {path:"dashboard/pipeline",title:"Trends",component: PipelineDataComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardsRoutingModule { }
