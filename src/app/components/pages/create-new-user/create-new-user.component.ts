import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from "@angular/forms";
import {HttpService} from "../../../services/http.service";
import {UserType} from "../../../types";

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss'],
  providers: [HttpService],
})
export class CreateNewUserComponent implements OnInit {
  @Input() showModal: boolean | undefined;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() createUser = new EventEmitter<UserType>();
  userForm: FormGroup;

  constructor(private builder: FormBuilder,
              private httpService: HttpService) {
    this.userForm = this.builder.group({
      userName: ['', Validators.required],
      userSex: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onCloseModal() {
    let body = document.getElementById('body');
    if (body) body.style.overflow = "inherit"
    this.closeModal.emit(false)
  }

  onCreateUser() {
    const newUser: UserType = {
      id: new Date().getTime(),
      name: this.userForm.value.userName,
      sex: this.userForm.value.userSex,
      avatar: this.userForm.value.userSex === "male"
        ? "assets/img/ava-male.jpg"
        : "assets/img/ava-female.png"
    }
    this.httpService.createNewUser(newUser)
      .subscribe(res =>{
        let body = document.getElementById('body');
        if (body) body.style.overflow = "inherit";
        this.onCloseModal();
        this.createUser.emit(newUser);
      })
  }
}
