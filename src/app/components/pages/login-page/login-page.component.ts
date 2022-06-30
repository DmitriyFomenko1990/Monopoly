import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {UserType} from "../../../types";
import { ToastrService } from 'ngx-toastr'
import autorization from "../../../services/autorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [HttpService],
})
export class LoginPageComponent implements OnInit {
  loginModel;
  singinModel;
  loginForm: boolean = true;
  users: UserType[] | undefined;

  constructor(private httpService: HttpService,
              private toastr: ToastrService,
              private router: Router
  ) {
    this.loginModel = {
      password: '',
      login: '',
    }
    this.singinModel = {
      sex: "male",
      password: '',
      login: '',
      name: '',
    };
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
        autorization.setCookie('monopolyToken', JSON.stringify(userWithoutPass));
        this.router.navigate(['/games']);
      } );
  }

  singIn():void {
    this.httpService.getUsers()
      .subscribe( data => {
        this.users = data
        let user = this.users?.find((user: UserType) => user.login === this.singinModel.login);
        if (user) {
          this.toastr.error("You are already registered");
          return
        }
        user = {...this.singinModel, id: 10}
        this.httpService.createNewUser( user )
          .subscribe(res => {
            console.log(res)
          })
        const {password, ...userWithoutPass} = user
        autorization.setCookie('monopolyToken', JSON.stringify(userWithoutPass));
        this.router.navigate(['/game-page']);
        debugger
      } );
  }

  ngOnInit(): void {
  }
}
