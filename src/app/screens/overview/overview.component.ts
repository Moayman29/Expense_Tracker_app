import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{
  
  constructor(private _spinner: NgxSpinnerService){}

    ngOnInit(): void {
      this._spinner.show(); // loading screen
  
      setTimeout(() => {
        this._spinner.hide();
      }, 1000);
    }
}
