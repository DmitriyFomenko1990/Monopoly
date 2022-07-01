export interface UserType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "amount"?: number,
  "login"?: string,
  "password"?: string,
  "roles"?: string[],
  "sex"?: string,
}

export interface PayerType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "amount": number,
}

export interface BankType {
  "id": number,
  "name": string,
  "avatar"?: string,
  "amount": number,
}

export interface Transaction {
  id: number,
  payer?: string,
  payerId?: number,
  recipient?: string,
  recipientId?: number,
  amount?: number | null,
}

export interface GameType {
  "id": number,
  "name": string,
  "createdAt": string,
  "players": UserType[],
  "status"?: string,
  "icon"?: string,
  transactions: Transaction[],
}

