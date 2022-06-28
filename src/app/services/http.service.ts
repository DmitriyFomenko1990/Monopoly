import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, Observable} from "rxjs";
import {UserType} from "../types";
import {map} from "rxjs/operators";

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getUsers(): Observable<UserType[]>{
    return this.http.get<UserType[]>('http://localhost:3000/users');
  }

  createNewUser(user: UserType){
    return this.http.post<any>('http://localhost:3000/users',  user)
      .pipe(map((res:any) => {
        return res
      }))
  }

}
