import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


registerationFrom!: FormGroup
userRegister: any;
userRole!:string;

constructor(private router:Router){}


    ngOnInit(): void {
      this.registerationFrom = new FormGroup({
        userName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      });

    }

    signIn() {
      if(this.registerationFrom.valid){
        const {userName, email, password} = this.registerationFrom.value;
        this.userRegister = {userName, email, password}

        const userEmail = this.userRegister.email;

        if(userEmail.includes('@rajeev')){
          this.userRole = "Admin";

        }else{
          this.userRole = "User";
        }
        sessionStorage.setItem("userRole", this.userRole);

        this.router.navigate(['user/user-list']);

        
      }
      }
}
