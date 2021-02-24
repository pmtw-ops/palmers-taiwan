import { createSlice } from '@reduxjs/toolkit'

const homeLogoSlice = createSlice({
  name: 'homeLogo',
  initialState: {
    vidClosed: false,
  },
  reducers: {
    closeLogoVideo: (state) => {
      state.vidClosed = true;
    },
  },
});

export const { closeLogoVideo } = homeLogoSlice.actions;

export default homeLogoSlice.reducer

export const selectVidClosed = state => state.homeLogo.vidClosed;