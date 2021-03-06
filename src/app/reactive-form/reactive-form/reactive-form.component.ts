import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fB: FormBuilder) { }

  registrationForm = this.fB.group( {
    userName: ['Sejal'],
    password: [''],
    confirmPassword: [''],
    address: this.fB.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  ngOnInit(): void {
  }

  onLoadData(): void {
    // Use setValue wnen you want to set the values for all the form controls
    // Use patchValue when you want to set the values for a few form controls
    this.registrationForm.patchValue({
      userName: 'Sejal Pande',
      password: 'ABC',
      confirmPassword: 'ABC'
    });
  }

}
