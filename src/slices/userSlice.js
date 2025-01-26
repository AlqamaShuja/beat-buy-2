import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import Axios from '../utils/AxiosConfig';
import axios from 'axios';

const yourAuthToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzczODI3NjcsImlkIjo0NDk1OCwidXNlcm5hbWUiOiJodXNuYWludGFoaXIxIiwidmVyaWZpZWQiOnRydWUsInBlcm1pc3Npb25zIjp7ImNhdGFwdWx0Ijp7Im93bmVyIjpbImFjY291bnQudXNlci5jaGFuZ2VfcGVybWlzc2lvbnMiLCJhY2NvdW50LnVzZXIubGlzdCIsImFjY291bnQudXNlci52aWV3IiwiYWNjb3VudC51c2VyLmRlbGV0ZSIsImFjY291bnQudXNlci51cGRhdGUiLCJhY2NvdW50LnVzZXIuY3JlYXRlIl19LCJhbHFhbWEwMSI6eyJvcmdfbGV2ZWwiOlsibmZ0LmNoYW5nZV9wZXJtaXNzaW9ucyIsIm5mdC5uZnQuY2hhbmdlX3Blcm1pc3Npb25zIiwibmZ0Lm5mdC5jcmVhdGUiLCJiYy5zZWNvbmRhcnlfbWFya2V0X3J1bGVzZXQuY2hhbmdlX3Blcm1pc3Npb25zIiwiYmMuc2Vjb25kYXJ5X21hcmtldF9ydWxlc2V0LnNldCIsInBheW1lbnQuY2hhbmdlX3Blcm1pc3Npb25zIiwicGF5bWVudC5vcmRlci5jb25maXJtIiwiZXZlbnQuZXZlbnQuY2hhbmdlX3Blcm1pc3Npb25zIiwiZXZlbnQuY2hhbmdlX3Blcm1pc3Npb25zIiwiZXZlbnQuZXZlbnQuY3JlYXRlIiwiZXZlbnQuZXZlbnQubGlzdCIsImV2ZW50LmV2ZW50LnVwZGF0ZSIsImV2ZW50LmV2ZW50LmRlbGV0ZSIsImV2ZW50LmV2ZW50LnZpZXciLCJiYy5ldmVudC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJiYy50aWNrZXRfY29uZmlnLmNoYW5nZV9wZXJtaXNzaW9ucyIsImJjLnRpY2tldC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJiYy5kaXNjb3VudC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJiYy5jaGFuZ2VfcGVybWlzc2lvbnMiLCJhY2NvdW50Lm9yZ2FuaXphdGlvbi5jaGFuZ2VfcGVybWlzc2lvbnMiLCJhY2NvdW50LnNlcnZpY2UuY2hhbmdlX3Blcm1pc3Npb25zIiwiYWNjb3VudC51c2VyLmNoYW5nZV9wZXJtaXNzaW9ucyIsImFjY291bnQuY2hhbmdlX3Blcm1pc3Npb25zIiwiYWNjb3VudC5vcmdhbml6YXRpb24uY3JlYXRlIiwiYWNjb3VudC5vcmdhbml6YXRpb24ubGlzdCIsImFjY291bnQub3JnYW5pemF0aW9uLnVwZGF0ZSIsImFjY291bnQub3JnYW5pemF0aW9uLmRlbGV0ZSIsImFjY291bnQub3JnYW5pemF0aW9uLnZpZXciLCJhY2NvdW50LnNlcnZpY2UuY3JlYXRlIiwiYWNjb3VudC5zZXJ2aWNlLmxpc3QiLCJhY2NvdW50LnNlcnZpY2UudXBkYXRlIiwiYWNjb3VudC5zZXJ2aWNlLmRlbGV0ZSIsImFjY291bnQuc2VydmljZS52aWV3IiwiYWNjb3VudC51c2VyLmxpc3QiLCJhY2NvdW50LnVzZXIudmlldyIsImFjY291bnQudXNlci5kZWxldGUiLCJhY2NvdW50LnVzZXIudXBkYXRlIiwiYWNjb3VudC51c2VyLmNyZWF0ZSIsImJjLmRpc2NvdW50LmNhbmNlbCIsImJjLmRpc2NvdW50LnVwZGF0ZV9kYXRlcyIsImJjLmRpc2NvdW50LnVwZGF0ZSIsImJjLmRpc2NvdW50LmNyZWF0ZSIsImJjLnRpY2tldC51cGRhdGVfb3duZXIiLCJiYy50aWNrZXQuaW52YWxpZGF0ZSIsImJjLnRpY2tldC5jYW5jZWwiLCJiYy50aWNrZXRfY29uZmlnLnVwZGF0ZV9mZWUiLCJiYy50aWNrZXRfY29uZmlnLnVwZGF0ZV9kYXRlcyIsImJjLnRpY2tldF9jb25maWcudXBkYXRlX3F1YW50aXR5IiwiYmMudGlja2V0X2NvbmZpZy51cGRhdGVfcHJpY2UiLCJiYy50aWNrZXRfY29uZmlnLmNhbmNlbCIsImJjLnRpY2tldF9jb25maWcuY3JlYXRlIiwiYmMuZXZlbnQudXBkYXRlX2RhdGVzIiwiYmMuZXZlbnQuY2FuY2VsIiwiYmMuZXZlbnQuY3JlYXRlIl19LCJodXNuYWludGFoaXIxIjp7Im9yZ19sZXZlbCI6WyJuZnQuY2hhbmdlX3Blcm1pc3Npb25zIiwibmZ0Lm5mdC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJuZnQubmZ0LmNyZWF0ZSIsImJjLnNlY29uZGFyeV9tYXJrZXRfcnVsZXNldC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJiYy5zZWNvbmRhcnlfbWFya2V0X3J1bGVzZXQuc2V0IiwicGF5bWVudC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJwYXltZW50Lm9yZGVyLmNvbmZpcm0iLCJldmVudC5ldmVudC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJldmVudC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJldmVudC5ldmVudC5jcmVhdGUiLCJldmVudC5ldmVudC5saXN0IiwiZXZlbnQuZXZlbnQudXBkYXRlIiwiZXZlbnQuZXZlbnQuZGVsZXRlIiwiZXZlbnQuZXZlbnQudmlldyIsImJjLmV2ZW50LmNoYW5nZV9wZXJtaXNzaW9ucyIsImJjLnRpY2tldF9jb25maWcuY2hhbmdlX3Blcm1pc3Npb25zIiwiYmMudGlja2V0LmNoYW5nZV9wZXJtaXNzaW9ucyIsImJjLmRpc2NvdW50LmNoYW5nZV9wZXJtaXNzaW9ucyIsImJjLmNoYW5nZV9wZXJtaXNzaW9ucyIsImFjY291bnQub3JnYW5pemF0aW9uLmNoYW5nZV9wZXJtaXNzaW9ucyIsImFjY291bnQuc2VydmljZS5jaGFuZ2VfcGVybWlzc2lvbnMiLCJhY2NvdW50LnVzZXIuY2hhbmdlX3Blcm1pc3Npb25zIiwiYWNjb3VudC5jaGFuZ2VfcGVybWlzc2lvbnMiLCJhY2NvdW50Lm9yZ2FuaXphdGlvbi5jcmVhdGUiLCJhY2NvdW50Lm9yZ2FuaXphdGlvbi5saXN0IiwiYWNjb3VudC5vcmdhbml6YXRpb24udXBkYXRlIiwiYWNjb3VudC5vcmdhbml6YXRpb24uZGVsZXRlIiwiYWNjb3VudC5vcmdhbml6YXRpb24udmlldyIsImFjY291bnQuc2VydmljZS5jcmVhdGUiLCJhY2NvdW50LnNlcnZpY2UubGlzdCIsImFjY291bnQuc2VydmljZS51cGRhdGUiLCJhY2NvdW50LnNlcnZpY2UuZGVsZXRlIiwiYWNjb3VudC5zZXJ2aWNlLnZpZXciLCJhY2NvdW50LnVzZXIubGlzdCIsImFjY291bnQudXNlci52aWV3IiwiYWNjb3VudC51c2VyLmRlbGV0ZSIsImFjY291bnQudXNlci51cGRhdGUiLCJhY2NvdW50LnVzZXIuY3JlYXRlIiwiYmMuZGlzY291bnQuY2FuY2VsIiwiYmMuZGlzY291bnQudXBkYXRlX2RhdGVzIiwiYmMuZGlzY291bnQudXBkYXRlIiwiYmMuZGlzY291bnQuY3JlYXRlIiwiYmMudGlja2V0LnVwZGF0ZV9vd25lciIsImJjLnRpY2tldC5pbnZhbGlkYXRlIiwiYmMudGlja2V0LmNhbmNlbCIsImJjLnRpY2tldF9jb25maWcudXBkYXRlX2ZlZSIsImJjLnRpY2tldF9jb25maWcudXBkYXRlX2RhdGVzIiwiYmMudGlja2V0X2NvbmZpZy51cGRhdGVfcXVhbnRpdHkiLCJiYy50aWNrZXRfY29uZmlnLnVwZGF0ZV9wcmljZSIsImJjLnRpY2tldF9jb25maWcuY2FuY2VsIiwiYmMudGlja2V0X2NvbmZpZy5jcmVhdGUiLCJiYy5ldmVudC51cGRhdGVfZGF0ZXMiLCJiYy5ldmVudC5jYW5jZWwiLCJiYy5ldmVudC5jcmVhdGUiXX19LCJlbnJvbGxtZW50X2lkIjoiZjc1MjUxZjQtMzMxYi00YjQxLTljYzYtZDUyNGNjOTdjZjY2IiwiZW5yb2xsZWQiOmZhbHNlLCJ0eXBlIjoicmVnaXN0ZXJlZCIsImlhdCI6MTczNzM3NTU2N30.r5Z_kT6F_YsqGaY1zDMGSPWSCa4jfrthjpdh1zIOdf0ZWanoZ1zm-4cX6zOlfB_CZNWusgsKwCbH5CkQA_NkToXCDhwQxcTxHD3rt8d819GKPnDB8e441LLkCEpmeFMpNi0o-uYxfuK4h4LUxM-dxzgkiIqansnIFPpsz32ibggcgtxpd1c8MxM411qZxfoXUz_EH0kt34HygLa8AgUQqbLyRUHxM3jxqNMQxgbHeeXAMsvrcWZYr3JHYpSDqYtjeV9TAp7VJUTNI8qrHhUiAxoUY7iboi3OBFTzKdQ6JedaFtpIzKFj1uhKpmbbUBMXyYQa3IWkL8zQG29QT9oxHg";

const initialState = {
    usersList: [],
};


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    try {
      console.log("cacnsanakcnajsnca");
      
        // const response = await axios.get('https://api.bam.fan/account/v1/user', {
        const response = await axios.get('https://api.bam.fan/account/v1/organizer/husnaintahir1/users?fields=permissions', {
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
              Authorization: `Bearer ${yourAuthToken}`
            }
        });

        console.log(response.data, "askcascnsajcnsajnn:userr");
        return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
});

export const createOrganizerThunk = createAsyncThunk('users/createOrganizerThunk', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://api.bam.fan/account/v1/organizer', { name: 'husnaintahir1', display_name: 'husnaintahir', organization_name: 'catapult', owner_id: 44958, kyc_level_id: 1, }, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${yourAuthToken}`
            }
        });

        console.log(response.data, "askcascnsajcnsajnn:userr");
        return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
});

export const addUserInviteThunk = createAsyncThunk('users/addUserThunk', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://api.bam.fan/account/v1/user/invite', userData, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${yourAuthToken}`
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
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersList = action.payload?.data;
            })
    },
});

//
export const getUserFromSlice = state => state.user;

// action
export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
