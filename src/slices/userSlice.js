import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import Axios from '../utils/AxiosConfig';
import axios from 'axios';

const initialState = {
    usersList: [],
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', 
    async () => {
        const API_URL = 'https://jsonplaceholder.typicode.com/users';
        const response = await axios.get(API_URL);
        return response.data;
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
              id: Date.now(), // Temporary ID
              ...action.payload,
            };
            state.usersList.push(newUser);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUser = state.usersList.find((user) => user.id === id);
            if (existingUser) {
              existingUser.name = name;
              existingUser.email = email;
            }
          },
          deleteUser: (state, action) => {
            const userId = action.payload;
            state.usersList = state.usersList.filter((user) => user.id !== userId);
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersList = action.payload;
            })
    },
});

//
export const getUserFromSlice = state => state.user;

// action
export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
