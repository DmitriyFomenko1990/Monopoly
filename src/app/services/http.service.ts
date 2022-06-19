import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, Observable} from "rxjs";
import {UserType} from "../types";
import {filterToMembersWithDecorator} from "@angular/compiler-cli/src/ngtsc/reflection";

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getUsers(): Observable<UserType[]>{
    return this.http.get<UserType[]>('http://localhost:3000/users').pipe(
    )
  }


}
