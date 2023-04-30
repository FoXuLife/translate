import React from 'react'
import { TInputRHF } from '../model/InputsTypes'
import c from './Inputs.module.scss'

const InputRHF: React.FC<TInputRHF> = ({
  type = 'text',
  register,
  name,
  errors,
  label,
  disabled,
  placeholder,
  options,
  autofocus,
  ...props
}) => {
  const className = `${c.input} ${
    errors && errors[name]?.message ? c.error : ''
  } ${type === 'file' && c.fileInput}`
  return (
    <div className={c.inputContainer}>
      <input
        className={className}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        autoFocus={autofocus}
        {...register(name, options)}
        {...props}
      />
      {errors && errors[name] && (
        <p className={c.errorText}>{errors && errors[name].message}</p>
      )}
    </div>
  )
}
export default React.memo(InputRHF)
