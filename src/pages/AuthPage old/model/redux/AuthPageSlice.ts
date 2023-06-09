import { createSlice } from '@reduxjs/toolkit'

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

const AuthPageSlice = createSlice({
  name: 'auth',
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

export const {} = AuthPageSlice.actions
export default AuthPageSlice.reducer
