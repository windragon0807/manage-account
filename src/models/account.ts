export type Term = {
  id: string
  title: string
  link: string
  mandatory: boolean
}

type BaseForm = {
  id: string
  label: string
  required: boolean
  helpMessage?: string
}

type TextFieldForm = BaseForm & {
  type: 'TEXT_FIELD'
}

type SelectFieldForm = BaseForm & {
  type: 'SELECT'
  options: Array<{ label: string; value: string }>
}

export type AccountForm = TextFieldForm | SelectFieldForm

type AccountStatus = 'READY' | 'DONE'

export type Account = {
  accountName: string
  accountNumber: number
  balance: number
  email: string
  name: string
  phone: string
  status: AccountStatus
  userId: string
}
