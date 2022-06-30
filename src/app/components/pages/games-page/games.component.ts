import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {GameType} from "../../../types";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [HttpService]
})
export class GamesComponent implements OnInit {
  games: GameType[] = [];
  showModal: boolean = false

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
     this.httpService.getGames()
      .subscribe(data => {
        this.games = data.reverse()
      });
  }

  onOpenModal() {
    this.showModal = true;
    let body = document.getElementById('body');
    if (body) body.style.overflow = "hidden"
  }

  onCloseModal(res: boolean) {
    this.showModal = res
  }

  onDeleteGame($event: MouseEvent, id: number) {
    $event.stopPropagation();
    this.httpService.deleteGame(id)
      .subscribe(res => {
        if (res) {
          this.games = this.games.filter(game => game.id !== id)
        }
      })
  }
}
