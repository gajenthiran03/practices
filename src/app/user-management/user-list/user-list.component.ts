import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {

  userDetails!: any[]

  date = new Date();

  constructor(private user: UserHttpService, private router:Router){

  }
  ngOnInit(): void {
   this.getUserList()
  }

  getUserList(){
    this.user.get().subscribe({
      next: data =>{
        this.userDetails = data;  
      },
      error: error =>{
        console.error(`Error: ${error}`)
      }
     });
  }

  deleteUser(userData: any){

    this.user.delete(userData).subscribe({
      next: data => {
        alert("user deleted" + data);
        this.getUserList();
        
      }
    })

  }
  
  navigateToAddUser(){
   this.router.navigate(['user/add-user']);
  }
}
