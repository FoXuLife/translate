export type TProps = TegAttributes
type TegAttributes = {
  accept?: string
  type?: 'text' | 'date' | 'email' | 'file' | 'password' | 'search' | 'checkbox'
  autoFocus?: boolean
  placeholder?: string
  checked?: boolean
  name: string
  label?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | File
  disabled?: boolean
}
export type TInputRHF = {
  register: any
  errors: any
  name: string
  label?: string
  type?: 'text' | 'date' | 'email' | 'file' | 'password' | 'search' | 'checkbox'
  disabled?: boolean
  autofocus?: boolean
  placeholder?: string
  options:any
}
