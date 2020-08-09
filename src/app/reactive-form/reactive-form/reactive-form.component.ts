import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm = new FormGroup( {
    userName: new FormControl('Sejal'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  constructor() { }

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
