import {createSlice} from '@reduxjs/toolkit'

const initialState="";

export const themeSlice=createSlice({
  name:"theme",
  initialState:{value:initialState},
  reducers:{
    change:(state,action)=>{
state.value=action.payload
    }
  }
}); 

export const {change}=themeSlice.actions

export default themeSlice.reducer