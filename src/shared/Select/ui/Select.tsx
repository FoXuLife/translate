import React, { useState } from 'react'

import c from './Select.module.scss'
import { TDialect } from 'pages/HomePage/model/redux/HomePageSlice'

type Option = {
  id: number
  name: string
  dialects?: TDialect[]
}

type TProps = {
  label: string
  options: Option[]
  selectedOption: Option | null
  onOptionSelected: (option: Option, prop: string) => void
  prop: string
}
const Select: React.FC<TProps> = ({
  label,
  options,
  selectedOption,
  onOptionSelected,
  prop,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={c.select}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? c.openned : c.closed} ${c.content}`}
      >
        <div className={c.selectBody}>
          <div className={c.label}>
            {selectedOption ? selectedOption.name : label}
          </div>

          <svg className={c.openClose} viewBox="0 0 20 20" fill="currentColor">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 010-1.414z"
                fill="currentColor"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                fill="currentColor"
              />
            )}
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className={c.optionsBody}>
          {options.map((option) => (
            <div
              key={option.id}
              className={c.option}
              onClick={() => {
                setIsOpen(false)
                onOptionSelected(option, prop)
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Select
