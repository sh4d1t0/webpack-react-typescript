import { AppStore } from '@/redux'
import { counterReducer } from '@/redux/states'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore<AppStore>({
  reducer: {
    counter: counterReducer,
  },
})

export default store
