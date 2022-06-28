export interface UserType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "money"?: number,
  "login"?: string,
  "password"?: string,
  "roles"?: string[],
  "sex"?: string,
}

export interface PayerType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "money": number,
}

export interface BankType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "money": number,
}

export interface GameType {
  "id": number,
  "name": string,
  "createdAt": string,
  "players": number[],
  "status"?: string,
  "icon"?: string,
}
