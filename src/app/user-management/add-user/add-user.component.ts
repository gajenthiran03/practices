import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  addUserForm!: FormGroup;
  editUser: boolean = false;
  userId:any;
  userDetails: any[]= [];

  constructor(private user: UserHttpService, private router:Router, private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', Validators.required),
    });

    this.route.params.subscribe({
      next: params => {
        if(params['id']){
         this.editUser = true;
         this.userId = params['id'];

         this.loadUser(this.userId);
        }
      }
   } )
  }


  loadUser(userId:any){
    this.user.getUserById(userId).subscribe({
      next: data =>{
        this.addUserForm.patchValue(data);  
      },
      error: err =>{
        console.log("failed to fetch user", err)
      }
    })
  }



  storeUserDate() {
    if (this.addUserForm.valid) {
      const { userName, email, phoneNo } = this.addUserForm.value;
      const userDate = { userName, email, phoneNo} 
    

      if(this.editUser){
        this.user.put(this.userId, userDate).subscribe({
          next: data =>{
            console.info(`Data updated`, data)
            this.addUserForm.reset();
            this.router.navigate(['user/user-list']);
          },
          error: err=>{
            console.error(`Error in Updating in user`, err);
          }
        })
      }
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
