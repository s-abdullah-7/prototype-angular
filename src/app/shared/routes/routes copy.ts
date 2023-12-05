import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: '',
    loadChildren: () => import('../../components/widget/widget.module').then(m => m.WidgetModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/Management/managment.module').then(m => m.ManagementModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/Dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
]
