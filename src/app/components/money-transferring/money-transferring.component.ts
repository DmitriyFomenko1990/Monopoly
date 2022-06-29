import {Component, Input, OnInit} from '@angular/core';
import { UserType} from "../../types";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-money-transferring',
  templateUrl: './money-transferring.component.html',
  styleUrls: ['./money-transferring.component.scss'],
  providers: [HttpService]
})
export class MoneyTransferringComponent implements OnInit {
  @Input() players: UserType[]  = [];
  @Input() id: number  = 0;
  payer: UserType | null = null;
  recipient: UserType | null = null;
  balance: number | null = null;
  constructor(private httpService: HttpService,) {}

  choosePayer(chosenPayer:UserType) {
    this.payer = chosenPayer;
  }

  chooseRecipient(chosenPayer:UserType) {
    this.recipient = chosenPayer;
  }

  clearChosen() {
    this.payer = null;
    this.recipient = null;
  }

  transferMoney() {
    if (this.payer?.balance && this.balance) this.payer.balance = this.payer.balance - this.balance;
    if (this.recipient?.balance && this.balance) this.recipient.balance = this.recipient.balance + this.balance;
    debugger
    this.httpService.updateGame({id: +this.id, players: this.players })
      .subscribe(res => {
        let x = res

      })
    debugger
    this.clearChosen();
    this.balance = null;
  }

  ngOnInit(): void {
  }

}
