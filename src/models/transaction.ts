export type TransactionType = 'diposit' | 'withdraw'

export type Transaction = {
  userId: string
  type: TransactionType
  amount: number
  balance: number
  displayText: string
  date: string
}
