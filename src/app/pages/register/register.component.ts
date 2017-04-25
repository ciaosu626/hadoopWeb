import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {RegisterService} from './register.service';
import 'style-loader!./register.scss';
import {LoginCount} from  './model/user.interface';

@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class Register {

  public form: FormGroup;
  public firstname: AbstractControl;
  public lastname: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;
  public logcount: LoginCount[];
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private service: RegisterService) {

    this.form = fb.group({
      'firstname': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'lastname': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.firstname = this.form.controls['firstname'];
    this.lastname = this.form.controls['lastname'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      let users = {
        'username': this.email.value,
        'password': this.password.value,
        'firstname': this.firstname.value,
        'lastname': this.lastname.value
        // your code goes here
        //console.log(values);
      };
      console.log(users);
      this.service.getAuth(users).subscribe((data: LoginCount[]) => this.logcount = data, null );
      console.log(values)
      
     // window.location.href = '#/login'
    }
  }
//   private loging() {
//     if (this.logcount.count === 1) {
//       window.location.href = '#/login'
//     }
//
//   }
}


