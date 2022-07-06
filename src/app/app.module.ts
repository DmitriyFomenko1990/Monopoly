import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from './components/header/header.component';
import { GamePageComponent } from './components/pages/game-page/game-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { MoneyTransferringComponent } from './components/money-transferring/money-transferring.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/pages/games-page/games.component';
import { CreateNewGameComponent } from './components/create-new-game/create-new-game.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { TransactionsWindowComponent } from './components/transactions-window/transactions-window.component';
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamePageComponent,
    FooterComponent,
    UserComponent,
    MoneyTransferringComponent,
    LoginPageComponent,
    GamesComponent,
    CreateNewGameComponent,
    UsersPageComponent,
    CreateNewUserComponent,
    TransactionsWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
