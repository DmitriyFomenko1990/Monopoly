import {Component, Input, OnInit} from '@angular/core';
import { UserType} from "../../types";
import { Bank } from "../dev-helpers/users";

@Component({
  selector: 'app-money-transferring',
  templateUrl: './money-transferring.component.html',
  styleUrls: ['./money-transferring.component.scss']
})
export class MoneyTransferringComponent implements OnInit {
  @Input() users: UserType[]  = [];
  payer: UserType | null = null;
  recipient: UserType | null = null;
  money: number | null = null


  choosePayer(chosenUser:UserType) {
    this.payer = chosenUser;
  }

  chooseRecipient(chosenUser:UserType) {
    this.recipient = chosenUser;
  }

  clearChosen() {
    this.payer = null;
    this.recipient = null;
  }

  transferMoney() {
    if (this.payer?.money && this.money) this.payer.money = this.payer.money - this.money;
    if (this.recipient?.money && this.money) this.recipient.money = this.recipient.money + this.money;
    this.clearChosen();
    this.money = null;
  }

  constructor() {}

  ngOnInit(): void {
    this.users.push(Bank)
  }

}
