import { UserType, BankType } from '../../types';

export const Users: UserType[] = [
  {
    "id": 2,
    "name": "dima",
    "avatar": "",
    "money": 15000,
    "login": "dima",
    "password": "123",
    "roles": ["admin"],
    "sex": "male"
  },
  {
    "id": 3,
    "name": "asdsa",
    "avatar": "assets/img/ava-female.png",
    "money": 15000,
    "login": "dima2",
    "password": "123",
    "roles": ["player"],
    "sex": "female"
  },
  {
    "id": 4,
    "name": "ascascvv",
    "avatar": "assets/img/ava-female.png",
    "money": 15000,
    "login": "dima3",
    "password": "123",
    "roles": ["player"],
    "sex": "female"
  },
  {
    "id": 5,
    "name": "jgfbfgb",
    "avatar": "",
    "money": 15000,
    "login": "dima4",
    "password": "123",
    "roles": ["player"],
    "sex": "female"
  }

];

export const Bank: BankType = {
  "id": 1,
  "name": "Bank",
  "avatar": "assets/img/bank.png",
  "money": 250000,
}
