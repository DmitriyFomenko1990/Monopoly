import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./components/pages/game-page/game-page.component";
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {GamesComponent} from "./components/pages/games-page/games.component";
import {UsersPageComponent} from "./components/pages/users-page/users-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'game-page', component: GamePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'games', component: GamesComponent },
  { path: 'users', component: UsersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
