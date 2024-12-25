import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {

  userDetails!: any[]
  userRole:any;

  constructor(private user: UserHttpService, private router:Router){

  }
  ngOnInit(): void {

    this.userRole = sessionStorage.getItem('userRole');
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

  editUser(userId:any){
    this.router.navigate(['edit-user', userId]);
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
    if(this.userRole == "Admin"){
   this.router.navigate(['user/add-user']);
    }else{
      alert("You done have access");
    }
  }
}
