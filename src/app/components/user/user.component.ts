import { Component, OnInit, Input } from '@angular/core';
import { UserType } from "../../types";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: UserType | null  = null

  constructor() {

  }

  ngOnInit(): void {
  }

}
