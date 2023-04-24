//РЕФАКТОРИНГ ! !  ! !  ! !! !

import React, { ChangeEvent, useState, useEffect } from 'react'

import c from './TranslatePage.module.scss'

import Textarea from 'shared/TextArea/ui/TextArea'
import { useAppDispatch, useAppSelector } from 'app/model/hook/MainHooks'
import FileInput from 'features/FileInput/ui/FileInput'
import DynamicInputs, {
  TFormState,
} from 'features/DynamicInputs/ui/DynamicInputs'
import { Buttons } from 'shared/Buttons/ui/Buttons'
import CostCalculation from '../lib/CostCalculated'
import { setNewTranslate } from 'pages/UserProfilePage/model/redux/UserProfileSlice'
import { useAuthorization } from 'app/model/hook/useAuth'

export const TranslatePage: React.FC = React.memo(() => {
  const distapch = useAppDispatch()
  const usedValue = useAppSelector((store) => store?.homePage)

  const [textareaValue, setTextareaValue] = useState<string>()
  const onchangeTextareaValue = (
    changeTextEvent: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(changeTextEvent.target.value)

  const [dynamicValue, setDynamicValue] = useState<any | null>(null)
  const onChangeDynamicValue = (dynamicValues: TFormState) =>setDynamicValue(dynamicValues)

  const [countWordInText, setCountWord] = useState<null | number | string>()
  const onChangeCount = (count: number | string) => setCountWord(count)

  const [price, setPrice] = useState<null | number>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (dynamicValue && (textareaValue || countWordInText) && price) {
    }
  }
  const Click = (e: any) => {
    distapch(setNewTranslate(textareaValue))
  }
  useEffect(() => {
    if (dynamicValue && (textareaValue || countWordInText)) {
      const value: number =
        textareaValue?.split(' ').length || Number(countWordInText)
      setPrice(CostCalculation(value, dynamicValue?.promptness))
    }
  }, [dynamicValue, textareaValue, countWordInText])
  useAuthorization('/')
  return (
    <div className={c.container}>
      <form onSubmit={handleSubmit}>
        <div className={c.inputBlock}>
          <Textarea
            name="uid"
            label={'Введите текст для перевода'}
            value={textareaValue}
            onChange={onchangeTextareaValue}
            disabled={countWordInText ? true : false}
          />
          <p>или</p>
          <div className={c.inputFile}>
            <FileInput
              onChangeCount={onChangeCount}
              disabled={textareaValue ? true : false}
            />
          </div>
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
            >
              Оплатить
            </Buttons>
          </div>
        </div>
      </form>
    </div>
  )
})
