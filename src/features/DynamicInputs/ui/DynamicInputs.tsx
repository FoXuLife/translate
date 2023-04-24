import React, { useState, useEffect } from 'react'

import c from './DynamicInputs.module.scss'

import {
  TLanguge,
  TStyleTranslate,
} from 'pages/HomePage/model/redux/HomePageSlice'
import Select from 'shared/Select/ui/Select'

export type TFormState = {
  language: number | null
  dialect: number | null
  style: number | null
  promptness: number | null
}
export type TProps = {
  languages: TLanguge[]
  styleTranslate: TStyleTranslate[]
  promptness: TStyleTranslate[]
  setDynamicValue: (values: any) => void
}

const DynamicInputs: React.FC<TProps> = ({
  languages,
  styleTranslate,
  promptness,
  setDynamicValue,
}) => {
  const [FormState, setstateForm] = useState<TFormState>({
    language: null,
    dialect: null,
    style: null,
    promptness: null,
  })
  useEffect(() => {
    if (Object.values(FormState).indexOf(null) === -1) {
      const objValue = {
        language: languages[FormState.language ? FormState.language : 0],
        dialect:
          languages[FormState.language ? FormState.language : 0].dialects[
            FormState.dialect ? FormState.dialect : 0
          ],
        style: styleTranslate[FormState.style ? FormState.style : 0],
        promptness: promptness[FormState.promptness ? FormState.promptness : 0],
      }
      setDynamicValue(objValue)
    }
  }, [FormState])

  const handleOptionSelected = (option: any, prop: string) => {
    setstateForm({ ...FormState, [prop]: option.id - 1 })
  }

  return (
    <div className={c.selectBlock}>
      <Select
        label="Выберете язык"
        options={languages}
        selectedOption={
          FormState?.language !== null ? languages[FormState.language] : null
        }
        onOptionSelected={handleOptionSelected}
        prop={'language'}
      />
      {FormState.language !== null && (
        <Select
          label="Выберете диалект"
          options={languages[FormState.language].dialects}
          selectedOption={
            FormState?.dialect !== null
              ? languages[FormState.language].dialects[FormState.dialect]
              : null
          }
          onOptionSelected={handleOptionSelected}
          prop={'dialect'}
        />
      )}
      {FormState.dialect !== null && FormState.language !== null && (
        <>
          <Select
            label="Выберете стиль"
            options={styleTranslate}
            selectedOption={
              FormState?.style !== null ? styleTranslate[FormState.style] : null
            }
            onOptionSelected={handleOptionSelected}
            prop={'style'}
          />
          <Select
            label="Выберете срочность"
            options={promptness}
            selectedOption={
              FormState?.promptness !== null
                ? promptness[FormState.promptness]
                : null
            }
            onOptionSelected={handleOptionSelected}
            prop={'promptness'}
          />
        </>
      )}
    </div>
  )
}

export default DynamicInputs
