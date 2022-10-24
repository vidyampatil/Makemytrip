import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AutherizationGuard } from './guards/autherization.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [{
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
  }, {
    path: 'cabs',
    loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule)
  }, 
  {
    path: 'package',
    loadChildren: () => import('./holiday-package/holiday-package.module').then(m => m.HolidayPackageModule)
  },
  
],
  
},

{
  path: '', component:AdminLayoutComponent,
  children: [
    {
    path: 'admin-dashboard',
    loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AutherizationGuard]
    },
    {
    path: 'flight-create',
    loadChildren: () => import('./dashboard/flight/flight.module').then(m => m.FlightModule)
  },
  {
    path: 'flight-list',
    loadChildren: () => import('./dashboard/flight-list/flight-list.module').then(m => m.FlightListModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
     canActivate:[AutherizationGuard]
  }
]
},
{
  path:'not-found',component:NotFoundComponent
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
