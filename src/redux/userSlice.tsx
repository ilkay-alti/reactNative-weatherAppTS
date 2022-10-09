import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  photo: string;
  location: string;
}

const initialState: UserState = {
  name: 'UserName',
  photo: '',
  location: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setName, setPhoto} = userSlice.actions;

export default userSlice.reducer;
