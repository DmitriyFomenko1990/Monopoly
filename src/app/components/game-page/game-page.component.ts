import { Component, OnInit } from '@angular/core';
import { Users } from "../dev-helpers/users";
import {UserType} from "../../types";


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  users: UserType[] = Users
  constructor() { }

  ngOnInit(): void {
    this.users.forEach(user => {
      if (!user.avatar) {
        user.avatar = user.sex === "male"
          ? "assets/img/ava-male.jpg"
          : "assets/img/ava-female.png"
      }
    });

  }

}
