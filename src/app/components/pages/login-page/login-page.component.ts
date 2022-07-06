import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {UserType} from "../../../types";
import { ToastrService } from 'ngx-toastr'
import authorization from "../../../services/autorization.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  // @ts-ignore
  loginModel: FormGroup;
  // @ts-ignore
  singInModel: FormGroup;
  loginForm: boolean = true;
  users: UserType[] | undefined;

  constructor(private httpService: HttpService,
              private toastr: ToastrService,
              private router: Router,
  ) {
    this.loginModel = new FormGroup({
      password: new FormControl('', [Validators.required, this.passwordValidation ]),
      login: new FormControl('', [Validators.required, Validators.email]),
    })

    this.singInModel = new FormGroup({
      name: new FormControl('', [Validators.required]),
      sex: new FormControl('male', [Validators.required]),
      password: new FormControl('', [Validators.required, this.passwordValidation ]),
      login: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {

  }

  async getUser(){
    try {
      await this.httpService.getUsers()
        .subscribe( data => this.users = data );
    } catch (err: any) {
      console.log(err)
    }
  }

  login() {
     this.httpService.getUsers()
      .subscribe( data => {
        this.users = data
        let user = this.users?.find((user: UserType) => user.login === this.loginModel.value.login);
        if (!user || user.password !== this.loginModel.value.password) {
          this.toastr.error("Login or password is invalid");
          return
        }
        const {password, ...userWithoutPass} = user
        authorization.setCookie('monopolyToken', JSON.stringify(userWithoutPass));
        this.router.navigate(['/games']);
      } );
  }

  singIn():void {
    this.httpService.getUsers()
      .subscribe( data => {
        this.users = data
        const user = this.users?.find((user: UserType) => user.login === this.singInModel.value.login);
        if (user) {
          this.toastr.error("You are already registered");
          return
        }
         const newUser = {
           id: new Date().getTime(),
           name: this.singInModel.value.name,
           sex: this.singInModel.value.sex,
           password: this.singInModel.value.password,
           login: this.singInModel.value.login,
           avatar: this.singInModel.value.sex === "male"
             ? "assets/img/ava-male.jpg"
             : "assets/img/ava-female.png"
        }
        this.httpService.createNewUser( newUser )
          .subscribe(res => {
          })
        const {password, ...userWithoutPass} = newUser
        authorization.setCookie('monopolyToken', JSON.stringify(userWithoutPass));
        this.router.navigate(['/game-page']);
      } );
  }

  passwordValidation (control: FormGroup) {
    if (control.value.length < 6) {
      return {
        'lengthError': true
      }
    }
    return null
  }

}
