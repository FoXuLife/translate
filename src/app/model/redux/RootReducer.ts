import { configureStore } from '@reduxjs/toolkit'
import HomePageSlice from 'pages/HomePage/model/redux/HomePageSlice'
import storyTranslateSlice from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'
import UserProfileSlice from 'pages/UserProfilePage/model/redux/UserProfileSlice'

const store = configureStore({
  reducer: {
    storySlice: storyTranslateSlice,
    homePage: HomePageSlice,
    userPage:UserProfileSlice 
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
