import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from '../../customValidator/forbiddenNameValidator';
import { PasswordValidator } from '../../customValidator/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fB: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fB.group( {
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fB.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkValue => {
      const email = this.registrationForm.get('email');
      if(checkValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
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
