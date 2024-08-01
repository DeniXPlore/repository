import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ColorState = {
  typeOfColor: 'hex' | 'rgb';
  color: string;
}

const initialState: ColorState = {
  typeOfColor: 'hex',
  color: '#000000',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setTypeOfColor(state, action: PayloadAction<'hex' | 'rgb'>) {
      state.typeOfColor = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
  },
});

export const { setTypeOfColor, setColor } = colorSlice.actions;

export default colorSlice.reducer;