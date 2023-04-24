import { PayloadAction, createSlice, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from 'app/model/redux/RootReducer'

export type TTranslations = {
  id: number
  name: string
  data: string
  successData: string
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
      state.Success = action.payload.Success
      state.inProgress = action.payload.inProgress
    },
  },
})
export const { setTranslations, setStateItems } = storyTranslateSlice.actions
export default storyTranslateSlice.reducer
