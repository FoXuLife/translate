import { PayloadAction, createSlice, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from 'app/model/redux/RootReducer'
import {
  setStateItems,
  setTranslations,
} from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'

export type TTranslations = {
  id: number
  name: string
  data: string
  successData: string
  state: -1 | 0 | 1
  link: string
  comment: string
  language: number
  dialect: number
  style: number
  promptness: number
  price: number
  originalFile: string
}
type TinputValue = {
  items: TTranslations[]
  inProgress: number
  Success: number
}
export type ThunkType<T> = ThunkAction<
  void,
  RootState,
  unknown,
  PayloadAction<T>
>

export function getTranslates(): ThunkType<string> {
  return (dispatch, getState) => {
    const items = [
      {
        id: 1,
        name: 'Перевод #2',
        data: '22.02.2023',
        successData: '-',
        state: 0,
        link: 'sadasda',
        comment: '',
      },
      {
        id: 2,
        name: 'Перевод #3',
        data: '28.02.2023',
        successData: '29.02.2023',
        state: 1,
        link: 'sadasda',
        comment: '',
      },
      {
        id: 5,
        name: 'Перевод #5',
        data: '28.02.2023',
        successData: '29.02.2023',
        state: 1,
        link: 'sadasda',
        comment: '',
      },
      {
        id: 3,
        name: 'Перевод #4',
        data: '28.05.2023',
        successData: '-',
        state: -1,
        link: 'sadasda',
        comment: 'Не верный язык ',
      },
    ]
    dispatch(setTranslations(items))
    let Success = 0
    let inProgress = 0
    items.forEach((e) => {
      if (e.state === 1) {
        Success++        
      } else if (e.state === 0) {
        inProgress++
      }
    })
    dispatch(setStateItems({ Success, inProgress }))
  }
}

export function setNewTranslate(e: any): ThunkType<string> {
  return async (dispatch, getState) => {
    const state = getState()
    const data = {
      name: 'as',
      data: new Date(),
      successData: '-',
      state: 0,
      link: '',
      comment: '',
    }

  }
}
const initialState: TinputValue = {
  items: [],
  inProgress: 0,
  Success: 0,
}
const userProfileSlice = createSlice({
  name: 'story',
  initialState,
  reducers: {},
})
export const {} = userProfileSlice.actions
export default userProfileSlice.reducer
