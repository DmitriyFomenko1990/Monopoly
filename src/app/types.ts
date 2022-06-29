export interface UserType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "balance"?: number,
  "login"?: string,
  "password"?: string,
  "roles"?: string[],
  "sex"?: string,
}

export interface PayerType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "balance": number,
}

export interface BankType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "balance": number,
}

export interface GameType {
  "id": number,
  "name": string,
  "createdAt": string,
  "players": UserType[],
  "status"?: string,
  "icon"?: string,
}
