import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./components/game-page/game-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {GamesComponent} from "./components/games/games.component";

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'game-page', component: GamePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
