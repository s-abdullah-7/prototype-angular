import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: '',
    loadChildren: () => import('../../components/Dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
]
 