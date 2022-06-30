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
  @Input() transactions: any[] = [];
  @Input() id: number  = 0;
  payer: UserType | null = null;
  recipient: UserType | null = null;
  amount: number | null = null;
  constructor(private httpService: HttpService,) {

  }

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
    if (this.payer?.amount && this.amount) this.payer.amount = this.payer.amount - this.amount;
    if (this.recipient?.amount && this.amount) this.recipient.amount = this.recipient.amount + this.amount;

    this.transactions = [
      {
        id: new Date().getTime(),
        payer: this.payer?.name,
        recipient: this.recipient?.name,
        amount: this.amount
      },
      ...this.transactions
    ]

    this.httpService.updateGame({id: +this.id, players: this.players, transactions: this.transactions })
      .subscribe(res => {
      })
    this.clearChosen();
    this.amount = null;
  }

  delTransactions(id: number) {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
  }

  ngOnInit(): void {
  }

}
