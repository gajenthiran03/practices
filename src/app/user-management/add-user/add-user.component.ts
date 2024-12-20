import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  addUserForm!: FormGroup;
  userDetails: any[]= [];

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
      this.userDetails.push(userDate);
      this.addUserForm.reset();
      console.log(this.userDetails);
    }
  }
}
