import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import c from './TextArea.module.scss'

interface Props {
  name: string
  placeholder?: string
  register?: UseFormRegister<any>
  value?: string | null
  label: string
  disabled: boolean
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
}

function Textarea({
  name,
  placeholder,
  register,
  value,
  label,
  onChange,
  onBlur,
  disabled,
}: Props) {
  return (
    <div className={c.inputContainer}>
      {label && !value && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        // ref={register} // register is only defined if using React Hook Form
        value={value !== null ? value : undefined}
        onChange={onChange}
        onBlur={onBlur}
        className={c.textArea}
        disabled={disabled}
      />
    </div>
  )
}

export default Textarea
