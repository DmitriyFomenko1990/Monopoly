import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss'],
  providers: [HttpService]
})
export class CreateNewGameComponent implements OnInit {

  constructor( private httpService: HttpService,
               private router: Router) { }

  @Input() showModal: boolean | undefined;
  @Output() closeModal = new EventEmitter<boolean>();
  users: UserType[] = [];
  selectedUsers: UserType[] = [];
  name: string =''

  ngOnInit(): void {
    this.httpService.getUsers()
      .subscribe(data => this.users = data)
  }

  onCloseModal() {
    this.closeModal.emit(false)
  }

  onSelect(currentUser: UserType | null):void {
    if (currentUser) {
      this.selectedUsers.push(currentUser)
      this.users = this.users.filter(user => user.id !== currentUser.id)
    }
  }

  onDeleteSelected(currentUser:UserType):void {
    if (currentUser) {
      this.users.push(currentUser)
      this.selectedUsers = this.selectedUsers.filter(user => user.id !== currentUser.id)
    }
  }

  onCreateGame(f: NgForm) {
    let date = new Date();
    const game = {
      id: date.getTime(),
      name: f.value.name,
      players: this.selectedUsers.map(user => user.id),
      createdAt: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
    }
    this.httpService.createNewGame(game)
      .subscribe(data => {
      this.router.navigate(['/games'])
      })
  }
}

import {UserType} from "../../types";
import {Router} from "@angular/router";
