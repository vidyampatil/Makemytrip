import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminSidebarComponent, AdminLayoutComponent],
  imports: [
    CommonModule, 
    AdminRoutingModule,
    ReactiveFormsModule
  ],
})
export class AdminModule {}
