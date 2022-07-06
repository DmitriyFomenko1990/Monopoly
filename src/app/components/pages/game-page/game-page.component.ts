import { Component, OnInit } from '@angular/core';
import {GameType, UserType} from "../../../types";
import { ActivatedRoute } from '@angular/router';
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  players: UserType[] = [];
  orderObj:any = null;
  gameObj: GameType | undefined;

  constructor(private route: ActivatedRoute,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params) => {
          this.orderObj = {...params};
        }
      );

    this.httpService.getGameById(this.orderObj.params.id)
      .subscribe(res => {
        this.gameObj = res[0]
        if (this.gameObj && "players" in this.gameObj && this.gameObj.players) {
          this.players = this.gameObj.players
        }
      })
  }

}
