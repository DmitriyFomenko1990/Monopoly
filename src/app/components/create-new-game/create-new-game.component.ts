import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NgForm} from '@angular/forms';
import {UserType} from "../../types";
import {Router} from "@angular/router";

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
    let body = document.getElementById('body');
    if (body) body.style.overflow = "inherit"
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
    const date = new Date();
    let players = this.selectedUsers.map(user => ({
      ...user,
      balance: 15000,
      avatar: user.sex === "male"
        ? "assets/img/ava-male.jpg"
        : "assets/img/ava-female.png"
    }))

    players.unshift({
      id: 1,
      name: "Bank",
      avatar: "assets/img/bank.png",
      balance: 250000,
    })

    const game = {
      id: date.getTime(),
      name: f.value.name,
      players: players,
      createdAt: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
    }
    let body = document.getElementById('body');
    if (body) body.style.overflow = "inherit"

    this.httpService.createNewGame(game)
      .subscribe(data => {
      this.router.navigate([`/game-page`])
      })
  }
}
