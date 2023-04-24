import React, { useState } from 'react'
import { TProps } from '../model/InputsTypes'
import c from './Inputs.module.scss'

const Inputs: React.FC<TProps> = ({
  type = 'text',
  name,
  value,
  label,
  onChange,
  disabled,
  ...props
}) => {
  const className = `${c.input}  ${type === 'file' && c.fileInput}` //${errors && errors[name]?.message ? c.error : ''}
  return (
    <div className={c.inputContainer}>
      {label && (
        <label htmlFor={name}>
          {value ? (typeof value !== 'string' ? value.name : value) : label}
        </label>
      )}
      <input
        className={className}
        type={type}
        value={
          typeof value !== 'string' ? '' : value !== undefined ? value : ''
        }
        onChange={onChange}
        disabled={disabled}
        id={name}
        name={name}
        {...props}
      />
    </div>
  )
}
export default React.memo(Inputs)
