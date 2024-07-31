import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AccordionState = {
  selected: string | null;
  enableMultiSelection: boolean;
  multiple: string[];
};

const initialState: AccordionState = {
  selected: null,
  enableMultiSelection: false,
  multiple: [],
};

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    toggleSelectionMode(state) {
      state.enableMultiSelection = !state.enableMultiSelection;
      state.multiple = [];
      state.selected = null;
    },
    setSingleSelection(state, action: PayloadAction<string | null>) {
      state.selected = action.payload;
    },
    setMultipleSelection(state, action: PayloadAction<string>) {
      const index = state.multiple.indexOf(action.payload);
      if (index === -1) {
        state.multiple.push(action.payload);
      } else {
        state.multiple.splice(index, 1);
      }
    },
  },
});

export const { toggleSelectionMode, setSingleSelection, setMultipleSelection } =
  accordionSlice.actions;

export default accordionSlice.reducer;
