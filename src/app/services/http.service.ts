import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, Observable} from "rxjs";
import {UserType, GameType} from "../types";
import {map} from "rxjs/operators";

@Injectable()
export class HttpService{
  url: string = 'http://localhost:3000'
  constructor(private http: HttpClient){ }

  getUsers(): Observable<UserType[]>{
    return this.http.get<UserType[]>(`${this.url}/users`);
  }

  createNewUser(user: UserType){
    return this.http.post<any>(`${this.url}/users`,  user)
      .pipe(map((res:any) => {
        return res
      }))
  }

  getGames(): Observable<GameType[]>{
    return this.http.get<GameType[]>(`${this.url}/games`);
  }

  createNewGame(game: GameType){
    return this.http.post<any>(`${this.url}/games`,  game)
      .pipe(map((res:any) => {
        return res
      }))
  }
}
