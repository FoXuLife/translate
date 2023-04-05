import { PayloadAction, createSlice, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from 'app/model/redux/RootReducer'

export type TTranslations = {
  id: number
  name: string
  data: string
  successData:string
  state: -1 | 0 | 1
  link: string
  comment: string
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

export function addedItemThunk(): ThunkType<string> {
  return (dispatch, getState) => {
    const items = [
      {
        id: 1,
        name: 'Перевод #2',
        data: '22.02.2023',
        successData:'-',
        state: 0,
        link: 'sadasda',
        comment: '',
      },
      {
        id: 2,
        name: 'Перевод #3',
        data: '28.02.2023',
        successData:'29.02.2023',
        state: 1,
        link: 'sadasda',
        comment: '',
      },
      {
        id: 5,
        name: 'Перевод #5',
        data: '28.02.2023',
        successData:'29.02.2023',
        state: 1,
        link: 'sadasda',
        comment: '',
      },
      {
        id: 3,
        name: 'Перевод #4',
        data: '28.05.2023',
        successData:'-',
        state: -1,
        link: 'sadasda',
        comment: 'Не верный язык ',
      },
    ]
    dispatch(setTranslations(items))
    let x = 0
    let y = 0
    items.forEach((e) => {
      if (e.state === 1) {
        x++
      } else if (e.state === 0) {
        y++
      }
    })
    dispatch(setStateItems({ x, y }))
  }
}
const initialState: TinputValue = {
  items: [],
  inProgress: 0,
  Success: 0,
}
const storyTranslateSlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setTranslations(state, action) {
      state.items = action.payload
    },
    setStateItems(state, action) {
      state.Success = action.payload.x
      state.inProgress = action.payload.y
    },
  },
})
export const { setTranslations, setStateItems } = storyTranslateSlice.actions
export default storyTranslateSlice.reducer
