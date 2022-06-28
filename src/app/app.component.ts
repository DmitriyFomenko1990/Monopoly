import { Component } from '@angular/core';
import autorization from "./services/autorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'monopoly';
  isAuth = false;

  ngOnInit(): void {
   // autorization.setCookie('monopolyToken', '123');
    const token = autorization.getCookie('monopolyToken');
    if (token) {
      this.router.navigate(['/game-page']);
    }
    if (!token) this.router.navigate(['/login']);
  }
}
