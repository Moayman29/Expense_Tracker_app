import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'expense_management_app';


  private _router = new Router();
  @ViewChild(RouterOutlet)
  outlet!: RouterOutlet;
  showButton = true;

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.outlet.deactivate();
      }
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.showButton = url !== '/newtransaction';
      }
    });
  }

  
}
