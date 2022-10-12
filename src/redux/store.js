import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
    reducer : {
        users : usersSlice,
        user : userSlice
    }
})
