import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countvalue : 0,
}

export const counterSlice = createSlice({
  name : "counter",
  initialState,
  reducers : {
    handleIncreaseCountValue : (state,actions)=>{
      state.countvalue +=1;
    }
  },
})

export const {handleIncreaseCountValue} = counterSlice.actions;

export default counterSlice.reducer;