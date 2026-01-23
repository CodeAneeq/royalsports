import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    data: {}
  },
  reducers: {
    addUser: (state, action) => {
        state.data = action.payload;
        state.isLogin = true
    },
    removeUser: (state, action) => {
        state.data = {};
        state.isLogin = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, } = userSlice.actions

export default userSlice.reducer