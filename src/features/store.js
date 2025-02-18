import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./Menu/MenuSlice"

const store = configureStore({
reducer : {
Menu : MenuReducer,
}
})

export default store