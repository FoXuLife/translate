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
    id: 0,
    username: 'Foxu ',
    email: 'nik.kol.2015@mail.com',
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
    setUserInfo(state, action) {
      const key: string = Object.keys(action.payload)[0]
      if (key === 'username' || key === 'email') {
        state.userInfo[key] = action.payload[key]
      }
      return
    },
  },
})
export const { login, logout, setUserInfo } = userProfileSlice.actions
export default userProfileSlice.reducer
