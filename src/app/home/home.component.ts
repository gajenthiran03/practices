import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  message!: string;
  name!: string;
  greet() {
    this.message = 'Hello world';
    this.router.navigate(['user/add-user']);
  }
}
