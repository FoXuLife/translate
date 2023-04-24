import { PayloadAction, createSlice, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from 'app/model/redux/RootReducer'

export type TOrderParams = {
  language: number
  dialect: number
  style: number
  promptness: number
  price: number
  originalFile: string
}
type TinputValue = {
  orderParams: TOrderParams[]
}
export type ThunkType<T> = ThunkAction<
  void,
  RootState,
  unknown,
  PayloadAction<T>
>

export function addedItemThunk(): ThunkType<string> {
  return (dispatch, getState) => {}
}
const initialState: TinputValue = {
  orderParams: [
    {
      language: 1,
      dialect: 1,
      style: 1,
      promptness: 0,
      price: 120,
      originalFile: 'adasdasda', // id время
    },
  ],
}
const storyTranslateSlice = createSlice({
  name: 'story',
  initialState,
  reducers: {},
})
export const {} = storyTranslateSlice.actions
export default storyTranslateSlice.reducer

