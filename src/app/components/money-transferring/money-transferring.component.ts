import {Component, Input, OnInit} from '@angular/core';
import {Transaction, UserType} from "../../types";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-money-transferring',
  templateUrl: './money-transferring.component.html',
  styleUrls: ['./money-transferring.component.scss']
})

export class MoneyTransferringComponent implements OnInit {
  @Input() players: UserType[]  = [];
  @Input() transactions: Transaction[] = [];
  @Input() id: number  = 0;
  payer: UserType | null = null;
  recipient: UserType | null = null;
  amount: number | null = null;
  constructor(private httpService: HttpService) {

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
        payerId: this.payer?.id,
        recipient: this.recipient?.name,
        recipientId: this.recipient?.id,
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
    const transaction = this.transactions.find(transaction => transaction.id === id);
      this.players.forEach(player => {
        if (player.id === transaction?.payerId) {
          // @ts-ignore
          player.amount = player.amount + transaction.amount
        }
        if (player.id === transaction?.recipientId) {
          // @ts-ignore
          player.amount = player.amount - transaction.amount
        }
      })
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
      this.httpService.updateGame({id: +this.id, players: this.players, transactions: this.transactions})
        .subscribe(res => {
        })
  }

  ngOnInit(): void {
  }

}
