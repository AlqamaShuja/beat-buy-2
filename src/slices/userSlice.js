import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import Axios from '../utils/AxiosConfig';
import axios from 'axios';

const yourAuthToken = '';

const initialState = {
    usersList: [],
};


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://api.bam.fan/account/v1/user', {
            headers: {
              Authorization: `Bearer ${yourAuthToken}`
            }
          });
        return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
});


export const addUserThunk = createAsyncThunk('users/addUserThunk', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://api.bam.fan/account/v1/user', userData, {
            headers: {
              'Content-Type': 'application/json',
            //   Authorization: `Bearer ${yourAuthToken}`
            }
        });

        console.log(response.data, "askcascnsajcnsajnn:userr");
        return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
});

export const adminLoginThunk = createAsyncThunk(
  'admin/login',
  async (adminCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api.bam.fan/account/v1/auth/login', adminCredentials);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
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
        // builder
        //     .addCase(fetchUsers.fulfilled, (state, action) => {
        //         state.usersList = action.payload;
        //     })
    },
});

//
export const getUserFromSlice = state => state.user;

// action
export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
