import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface WeatherState {
  data: Weather | null;
  loading: boolean;
  error: string | null;
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location: {long: number; lat: number}) => {
    const response = await axios.get<Weather>(
      `http://api.weatherapi.com/v1/current.json?key=66f01c8c7138489580e124152220110&q=${location.lat},${location.long}&aqi=yes`,
    );
    return response.data;
  },
);

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, state => {
        state.loading = false;
        state.error = 'Error fetching weather data';
      });
  },
});

export interface Weather {
  location: Location;
  current: Current;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: {[key: string]: number};
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
