import { configureStore } from '@reduxjs/toolkit'
import storyTranslateSlice from 'pages/StoryTranslate/model/redux/StoryTranslateSlice'

const store = configureStore({
  reducer: {
    storySlice:storyTranslateSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
