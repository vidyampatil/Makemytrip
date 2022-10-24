import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';


const routes: Routes = [
  {
    path:'', component:AdminLayoutComponent
  },{
    path:'admin-layout', component:AdminLayoutComponent,
  },
  {
    path:'sidebar', component:AdminSidebarComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
