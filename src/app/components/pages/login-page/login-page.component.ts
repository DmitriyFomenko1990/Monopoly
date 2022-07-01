import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {UserType} from "../../../types";
import { ToastrService } from 'ngx-toastr'
import authorization from "../../../services/autorization.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [HttpService],
})
export class LoginPageComponent implements OnInit {
  loginModel;
  singInModel: FormGroup;
  loginForm: boolean = true;
  users: UserType[] | undefined;

  constructor(private httpService: HttpService,
              private toastr: ToastrService,
              private router: Router,
              private builder: FormBuilder,
  ) {
    this.loginModel = {
      password: '',
      login: '',
    }
    this.singInModel = this.builder.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      password: ['', Validators.required],
      login: ['', Validators.required]
    });
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
        let user = this.users?.find((user: UserType) => user.login === this.loginModel.login);
        if (!user || user.password !== this.loginModel.password) {
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

  ngOnInit(): void {
  }
}
