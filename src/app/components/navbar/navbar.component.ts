import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropDown=false;

  // a method to open a drop down menu for routing links
  dropDownFn(){
    this.dropDown=!this.dropDown;
  }
  
}
