import { PayloadAction, createSlice, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from 'app/model/redux/RootReducer'

type TInitialState = {
  userInfo: {
    id: number | null
    username: string | null
    email: string | null
    balance: number | null
    token: string | null
    isAuth: boolean
  }
}
export type ThunkType<T> = ThunkAction<
  void,
  RootState,
  unknown,
  PayloadAction<T>
>

const initialState: TInitialState = {
  userInfo: {
    id: null,
    username: null,
    email: null,
    balance: 192,
    token: null,
    isAuth: true,
  },
}
const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.userInfo = { ...action.payload, isAuth: true }
    },
    logout(state) {
      state.userInfo = {
        id: null,
        username: null,
        email: null,
        token: null,
        balance: null,
        isAuth: false,
      }
    },
  },
})
export const { login, logout } = userProfileSlice.actions
export default userProfileSlice.reducer
