import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNumber: 0
}

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState,
  reducers: {
    incrementNumber: (state) => {
      state.currentNumber += 1
    },
    decrementNumber: (state) => {
      state.currentNumber -= 1
    },
    incrementUserValue: (state, action) => {
      state.currentNumber += action.payload
    },
    decrementUserValue: (state, action) => {
      state.currentNumber -= action.payload
    }
  }
})

export const {
  decrementNumber,
  decrementUserValue,
  incrementNumber,
  incrementUserValue
} = exampleSlice.actions

export default exampleSlice.reducer