import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export  class HomeComponent {

 message! : string;
 name! : string;
  greet(){
  this.message = 'Hello world';
  }
}
