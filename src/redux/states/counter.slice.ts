import { CounterEmptyState } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: CounterEmptyState,
  reducers: {
    incrementCounter: state => {
      state.value += 1
    },
    decrementCounter: state => {
      state.value -= 1
    },
    resetCounter: () => {
      return CounterEmptyState
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions

export default counterSlice.reducer
