import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {

  userDetails!: any[]

  constructor(private user: UserService, private router:Router){

  }
  ngOnInit(): void {
   this.userDetails = this.user.getUserList();
  }
  
  navigateToAddUser(){
   this.router.navigate(['user/add-user']);
  }
}
