import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {UserType} from "../../../types";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [HttpService],
})
export class UsersPageComponent implements OnInit {
  users: UserType[] = [];
  showModal: boolean = false;
  constructor(private httpService: HttpService) { }

  onOpenModal() {
    this.showModal = true;
    let body = document.getElementById('body');
    if (body) body.style.overflow = "hidden"
  }

  onCloseModal(res: boolean) {
    this.showModal = res

  }

  addUser(newUser: UserType) {
    this.users.unshift(newUser);
  }

  onDeleteUser(id: number) {
    this.httpService.deleteUser(id)
      .subscribe(res => {
        this.users = this.users.filter(user => user.id !== id)
      })
  }

  ngOnInit(): void {
    this.httpService.getUsers()
      .subscribe(res => {
        this.users = res.reverse();
      })
  }

}
