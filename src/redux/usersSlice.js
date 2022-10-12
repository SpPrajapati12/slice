import { createSlice } from "@reduxjs/toolkit";


const users = createSlice({
    name: "users",
    initialState: [
        {
            id: 1,
            userName: "Sandip",
            email: "Sandip.prajapati@gmail.com"
        }
    ],
    reducers: {
        getUserSlice: (state, action) => {
            state = action.payload
            return state
        },
        addUserSlice: (state, action) => {
            return [...state, action.payload]
        },
        deleteUserSlice: (state, action) => {
            state = state.filter((i) => i.id !== action.payload)
            return state
        },
        updateUserSlice: (state, action) => {
            state = state.map((i) => i.id === action.payload.id ? action.payload : i)
            return state
        }
    }
})

export const { getUserSlice, addUserSlice, deleteUserSlice, updateUserSlice } = users.actions


export default users.reducer