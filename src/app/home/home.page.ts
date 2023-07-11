import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date: string = '';
  form: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  dateToday: string = '';
  dateYesterday: string = '';
  tenDays: string = '';
  previousYear: string = '';
  dateValue: any = '';
  showList: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.form = this.createForm();
      this.minDate = new Date(Date.now() + 864e5).toISOString();
      this.maxDate = (new Date().getFullYear() + 5).toString();
    }

    createForm(): FormGroup {
      return this.formBuilder.group({
        date: ['', [ Validators.required ]],
      })
    }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd, yyyy');
  }

  onSubmit() {
    this.showList = true;
    this.dateToday = this.formatDate(new Date().toISOString()); // Display Todays date
    this.dateYesterday = this.formatDate(this.getNewDate(new Date(), 1, true)); // Display Yesterday’s date
    this.tenDays = this.formatDate(this.getNewDate(new Date(this.dateValue), 10, true)); // Display 10day’s past from the selected date
    this.previousYear = this.formatDate(new Date(new Date(this.dateValue).setFullYear(new Date().getFullYear() -1)).toISOString());
    
  }

  getNewDate(da: Date, days: number, previous: boolean) {
    
    if(previous){
      da.setDate(da.getDate() - days);
    }else{
      da.setDate(da.getDate() + days);
    }
    return  new Date(da).toISOString();
  };
}
