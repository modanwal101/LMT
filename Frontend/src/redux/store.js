
import {configurestore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"

 export const store = configurestore({
  reducer:{
    user:userSlice
  }
 })