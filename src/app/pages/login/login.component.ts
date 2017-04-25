import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {LoginCount} from  './model/user.interface';
import {CookieService} from 'ng2-cookies';
import 'style-loader!./login.scss';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers : [CookieService]
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public profile: Object;
  public statusLogin: boolean;
  public logcount: LoginCount[];


  constructor(fb: FormBuilder, private service:LoginService, public cookies :CookieService ){
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
     // let auth = this.cookies.get('authen');
     // if(auth){
     //   window.location.href = '#/pages/dashboard';
     // }

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      let users = {
        'username': this.email.value,
        'password': this.password.value
      };
      console.log(users);
      this.service.getAuth(users).subscribe((data: LoginCount[]) => this.logcount = data, null, () => this.loging());
      // console.log(values);
      // your code goes here


      // console.log(this.count);
      // for(let i of this.count){
      //   if(i.count === 1){
      //     window.location.href = '/pages/dashboard'
      //   }
      // }
    }
  }
  private loging() {
      if (this.logcount.count === 1) {
        this.cookies.set('authen','pass');
        window.location.href = '#/pages/dashboard'
      }

  }
}
