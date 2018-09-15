import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Customer } from '../customer';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  phoneTypes = ['Mobile Phone', 'Land Phone'];
  customerModule = new Customer('','','','','','','','','','','','','','');
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
        this.emailFormControl.hasError('email') ? 'Not a valid email' :
            '';
  }
}
