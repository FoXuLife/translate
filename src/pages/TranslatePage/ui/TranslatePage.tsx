import React, { ChangeEvent, useState, useEffect, useMemo } from 'react'

import c from './TranslatePage.module.scss'

import Textarea from 'shared/TextArea/ui/TextArea'
import { useAppDispatch, useAppSelector } from 'app/model/hook/MainHooks'
import FileInput from 'features/FileInput/ui/FileInput'
import DynamicInputs, {
  TFormState,
} from 'features/DynamicInputs/ui/DynamicInputs'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import CostCalculation from '../lib/CostCalculated'

import { useAuthorization } from 'app/model/hook/useAuth'
import { setNewTranslate } from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'

export const TranslatePage: React.FC = React.memo(() => {
  // useAuthorization('/preview') // Проверка на авторизацию
  const distapch = useAppDispatch()
  const usedValue = useAppSelector((store) => store?.homePage) //

  const [textareaValue, setTextareaValue] = useState<string | null>(null) // Значение из текстового поля
  const onchangeTextareaValue = (changeTextEvent: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(changeTextEvent.target.value) // onChange для текстового поля
  
  const [dynamicValue, setDynamicValue] = useState<TFormState | null>(null) // Значения из Select элементов 
  const onChangeDynamicValue = (dynamicValues: TFormState) =>setDynamicValue(dynamicValues) // Изменение значений из Select элементов

  const [countWordInText, setCountWord] = useState<null | number | string | undefined>(null) //  Значение из файла, а точнее количество слов в файле
  const onChangeCount = (count: number | string | null | undefined) =>setCountWord(count) // Изменение значения из файла

  const [price, setPrice] = useState<null | number>() // Цена с учетом введенных выше двнных

  const handleSubmit = (e: any) => {
    // e.preventDefault()
    // if (dynamicValue && (textareaValue || countWordInText) && price) {
    // }
  }
  const Click = () => {
    // distapch(setNewTranslate(textareaValue))
  }
  
  useEffect(() => {
    if (dynamicValue && (textareaValue || countWordInText)) {
      const value: number =
        textareaValue?.split(' ').length || Number(countWordInText)  
      setPrice(CostCalculation(value, dynamicValue?.promptness)) // Мемоизировать
    }
  }, [dynamicValue, textareaValue, countWordInText]) 

  return (
    <div className={c.container}>
      <form onSubmit={handleSubmit}>
        <div
          className={`${c.inputBlock} ${
            textareaValue || countWordInText ? c.textBlockFull : ''
          }`}
        >
          {!countWordInText && (
            <div className={!textareaValue ? c.textBlockHalf : ''}>
              <Textarea
                name="uid"
                label={'Введите текст для перевода'}
                value={textareaValue}
                onChange={onchangeTextareaValue}
                disabled={countWordInText ? true : false}
              />
            </div>
          )}
          {!!textareaValue || !!countWordInText || <p>или</p>}
          {!textareaValue && (
            <div
              className={`${c.inputFile} ${
                !countWordInText ? c.inputBlockHalf : ''
              }`}
            >
              <FileInput
                onChangeCount={onChangeCount}
                disabled={textareaValue ? true : false}
              />
            </div>
          )}
        </div>
        <div className={c.submitBlock}>
          <div className={c.dialectList}>
            <DynamicInputs
              languages={usedValue.languages}
              styleTranslate={usedValue.styleTranslate}
              promptness={usedValue.promptness}
              setDynamicValue={onChangeDynamicValue}
            />
          </div>
          <div className={c.price}>
            <p>
              Общая сумма к оплате
              <span>
                {dynamicValue && (textareaValue || countWordInText) ? price : 0}
                т.
              </span>
            </p>
          </div>

          <div className={c.submit}>
            <Buttons
              type={'withBackground'}
              onClickHandle={Click}
              disabled={
                dynamicValue && (textareaValue || countWordInText)
                  ? false
                  : true
              }
            >
              Оплатить
            </Buttons>
          </div>
        </div>
      </form>
    </div>
  )
})
