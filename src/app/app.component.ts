import { Component, ElementRef, ViewChild } from '@angular/core';

import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'CURB65Calc';
  count = 0;
  
  chkConf = new FormControl();
  onToggleChange(ob: MatSlideToggleChange) {
    if (ob.checked) {
      this.count += 1;
    }
    else {
      this.count -= 1;
    }
    console.log(this.count);  

  }  

}
