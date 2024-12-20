import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule { }
