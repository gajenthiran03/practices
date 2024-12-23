import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  addUserForm!: FormGroup;
  userDetails: any[]= [];

  constructor(private user: UserHttpService, private router:Router){

  }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', Validators.required),
    });
  }

  storeUserDate() {
    if (this.addUserForm.valid) {
      const { userName, email, phoneNo } = this.addUserForm.value;
      const userDate = { userName, email, phoneNo} 
      this.user.post(userDate).subscribe({
        next: data =>{
          console.info(`Data passed`, data)
          this.addUserForm.reset();
          this.router.navigate(['user/user-list']);
        },
        error: err=>{
          console.error(`Error in passing Data`, err);
        }
      });

      console.log(this.userDetails);
    }
  }
}
