import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface LocationState {
  longitude: number;
  latitude: number;
}

const initialState: LocationState = {
  longitude: 0,
  latitude: 0,
};

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    setLongitude: (state, action: PayloadAction<number>) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action: PayloadAction<number>) => {
      state.latitude = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLongitude, setLatitude} = locationSlice.actions;

export default locationSlice.reducer;
