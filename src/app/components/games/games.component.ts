import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {GameType} from "../../types";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [HttpService]
})
export class GamesComponent implements OnInit {
  constructor(
    private httpService: HttpService
  ) { }

  games: GameType[] = [];
  showModal: boolean = false

  ngOnInit(): void {
     this.httpService.getGames()
      .subscribe(data => {
        this.games = data.reverse()
      });
  }

  onOpenModal() {
    this.showModal = true;
  }

  onCloseModal(res: boolean) {
    this.showModal = res
  }



}
