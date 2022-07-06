import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-transactions-window',
  templateUrl: './transactions-window.component.html',
  styleUrls: ['./transactions-window.component.scss']
})

export class TransactionsWindowComponent implements OnInit {
  @Input() transactions: any[] | undefined;
  @Output() delTransactions = new EventEmitter<number>();
  orderObj :any;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTransaction(transactionId: number) {
    this.delTransactions.emit(transactionId);
  }
}
