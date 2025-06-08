import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IUser } from '@/types/user';
import { errorTypeGuard } from '@/types/typeguards';

import { getUser } from '@/services/user';

type UserState = {
  user: IUser | undefined | null;
  error: string | null;
  isLoading: boolean;
};

interface RejectValue {
  message: string;
}

const initialState: UserState = { user: null, error: null, isLoading: false };

export const getCurrentUser = createAsyncThunk<IUser, void, { rejectValue: RejectValue }>(
  'user/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await getUser();
      return user;
    } catch (error) {
      if (error instanceof AxiosError && errorTypeGuard(error.response?.data)) {
        return rejectWithValue({ message: error.response?.data.message });
      }

      return rejectWithValue({ message: 'Something went wrong! Try one more time!' });
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setError: (state) => {
      state.error = '';
    },
    removeUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message || 'Somethink went wrong!';
        }
        state.isLoading = false;
      });
  }
});

export const { setUser, setError, removeUser } = userSlice.actions;

export default userSlice.reducer;
