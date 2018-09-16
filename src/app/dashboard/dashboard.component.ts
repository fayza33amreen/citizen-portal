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
  phone3TypeDisable = false;
  
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
        this.emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }

  firstNameControl = new FormControl('', );
  lastNameControl = new FormControl('', );
  companyNameControl = new FormControl('', );

  addressControl = new FormControl('', [
    Validators.required
  ]);
  cityControl = new FormControl('', [
    Validators.required
  ]);
  provinceControl = new FormControl('', [
    Validators.required
  ]);
  postalControl = new FormControl('', [
    Validators.required
  ]);
  phone1Control = new FormControl('', [
    Validators.required
  ]);
  phone1typeControl = new FormControl('', [
    Validators.required
  ]);
  phone3Control = new FormControl();
  

  
  // get_ErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  customerModel = new Customer(
    this.emailControl.value,this.firstNameControl.value,this.lastNameControl.value,this.companyNameControl.value,
    this.addressControl.value,this.cityControl.value,this.provinceControl.value,this.postalControl.value,this.phone1Control.value,'','','','','');
  
}
