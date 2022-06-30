import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transactions-window',
  templateUrl: './transactions-window.component.html',
  styleUrls: ['./transactions-window.component.scss'],
  providers: [HttpService],
})
export class TransactionsWindowComponent implements OnInit {
  @Input() transactions: any[] | undefined;
  @Output() delTransactions = new EventEmitter<number>();
  orderObj :any;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params) => {
          this.orderObj = {...params};
        }
      );
  }

  onDeleteTransaction(transactionId: number) {
    this.transactions = this.transactions?.filter(transaction => transaction.id !== transactionId);
    this.delTransactions.emit(transactionId)
    if (this.transactions && this.orderObj?.params?.id) {
      this.httpService.updateTransactions({id: this.orderObj.params.id, transactions: this.transactions})
        .subscribe(res => {
        })
    }
  }
}
