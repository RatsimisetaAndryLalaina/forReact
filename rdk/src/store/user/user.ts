import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
    },
    reducers: {
        setCurrentUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;