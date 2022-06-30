import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserType, GameType} from "../types";
import {map} from "rxjs/operators";
import {apiURL} from "../apiURL";

@Injectable()
export class HttpService{
  url: string = apiURL;
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

  deleteUser(id: number){
    return this.http.delete<any>(`${this.url}/users/${id}`)
      .pipe(map((res:any) => {
        return res
      }))
  }

  getGames(): Observable<GameType[]>{
    return this.http.get<GameType[]>(`${this.url}/games`);
  }

   getGameById(id: number): Observable<GameType[]>{
    return this.http.get<GameType[]>(`${this.url}/games?id=${id}`)
  }

  createNewGame(game: GameType){
    return this.http.post<any>(`${this.url}/games`,  game)
      .pipe(map((res:any) => {
        return res
      }))
  }

  deleteGame(id: number){
    return this.http.delete<any>(`${this.url}/games/${id}`)
      .pipe(map((res:any) => {
        return res
      }))
  }

  updateGame(game:{id: number, players: UserType[], transactions: any[] }) {
    return this.http.patch<any>(`${this.url}/games/${game.id}`,  game)
      .pipe(map((res:any) => {
        return res
      }))
  }

  updateTransactions(game:{id: number, transactions: any[] | undefined }) {
    return this.http.patch<any>(`${this.url}/games/${game.id}`,  game)
      .pipe(map((res:any) => {
        return res
      }))
  }
}
