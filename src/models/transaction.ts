export type TransactionType = 'deposit' | 'withdraw'
export type TransactionFilterType = 'all' | TransactionType

export type Transaction = {
  userId: string
  type: TransactionType
  amount: number
  balance: number
  displayText: string
  date: string
}
