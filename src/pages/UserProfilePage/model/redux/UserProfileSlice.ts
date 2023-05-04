import {
  PayloadAction,
  createSlice,
  ThunkAction,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { RootState } from 'app/model/redux/RootReducer'
export type userInfo = {
  id: number | null
  username: string | null
  email: string | null
  balance: number | null
  token: string | null
  isAuth: boolean
}
type TInitialState = {
  userInfo: userInfo
  status: null | 'pending' | 'success' | 'error'
}
export type ThunkType<T> = ThunkAction<
  void,
  RootState,
  unknown,
  PayloadAction<T>
>
export const changeMainInfo = createAsyncThunk(
  'user/changeMainInfo',
  async (payload: { string: string }, thunkAPI) => {
    const response = await fetch('https://randomuser.me/api/?results=1', {})
    const dispatch = thunkAPI.dispatch
    dispatch(setUserInfo(payload))
    return response.json()
  }
)
const initialState: TInitialState = {
  userInfo: {
    id: 0,
    username: 'Foxu ',
    email: 'nik.kol.2015@mail.com',
    balance: 192,
    token: null,
    isAuth: true,
  },
  status: null,
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
    setStatus(state, action) {
      state.status = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeMainInfo.fulfilled, (state, action) => {
        state.status = 'success'
      })
      .addCase(changeMainInfo.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(changeMainInfo.rejected, (state, action) => {
        state.status = 'error'
      })
  },
})
export const { login, logout, setUserInfo, setStatus } =
  userProfileSlice.actions
export default userProfileSlice.reducer
