import { Component } from '@angular/core';
import autorization from "./services/autorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monopoly';
  isAuth = false;

  ngOnInit(): void {
   // autorization.setCookie('monopolyToken', '123');
    const token = autorization.getCookie('monopolyToken');
    if (token) this.isAuth = true;
  }
}
