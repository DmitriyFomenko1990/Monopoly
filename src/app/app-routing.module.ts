import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./components/game-page/game-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  { path: 'game-page', component: GamePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
