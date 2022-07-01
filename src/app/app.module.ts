import {EventEmitter, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { GamePageComponent } from './components/pages/game-page/game-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { MoneyTransferringComponent } from './components/money-transferring/money-transferring.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GamesComponent } from './components/pages/games-page/games.component';
import { CreateNewGameComponent } from './components/create-new-game/create-new-game.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { TransactionsWindowComponent } from './components/transactions-window/transactions-window.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
