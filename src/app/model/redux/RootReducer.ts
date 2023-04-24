import { configureStore } from '@reduxjs/toolkit'
import AuthPageSlice from 'pages/AuthPage/model/redux/AuthPageSlice'
import HomePageSlice from 'pages/HomePage/model/redux/HomePageSlice'
import storyTranslateSlice from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'

const store = configureStore({
  reducer: {
    storySlice: storyTranslateSlice,
    homePage: HomePageSlice,
    authPage:AuthPageSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
