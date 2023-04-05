export type TProps = TegAttributes
type TegAttributes = {
  accept?: string
  type?: 'text' | 'date' | 'email' | 'file' | 'password' | 'search'
  //withImage?: false | 'WithImageRight' | 'WithImageLeft' 
  autoFocus?: boolean
  placeholder?: string
  multiple?: boolean
  checked?: boolean
  name: string
 // isHookForm: boolean
  errors?: Record<string, any>
  register?:any
}

