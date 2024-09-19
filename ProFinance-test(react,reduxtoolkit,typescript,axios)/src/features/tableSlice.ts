import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface TableState {
  data: Array<{
    id: number;
    barcode: string;
    product_brand: string;
    product_name: string;
    product_quantity: number;
    price: number;
  }>;
  sortKey: keyof (typeof data)[0] | null;
  sortDirection: "asc" | "desc";
  editField: { id: number; field: string } | null;
  error: string | null;
}

const initialState: TableState = {
  data: [],
  sortKey: null,
  sortDirection: "asc",
  editField: null,
  error: null,
};

export const fetchData = createAsyncThunk(
  "table/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/data.json");
      return response.data;
    } catch (error) {
      return rejectWithValue("Ошибка при загрузке данных");
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateCell(
      state,
      action: PayloadAction<{
        id: number;
        field: keyof (typeof state.data)[0];
        value: string;
      }>
    ) {
      const { id, field, value } = action.payload;
      const item = state.data.find((d) => d.id === id);
      if (item) {
        item[field] = value as any;
      }
    },
    sortData(
      state,
      action: PayloadAction<{
        key: keyof (typeof state.data)[0];
        direction: "asc" | "desc";
      }>
    ) {
      const { key, direction } = action.payload;
      state.data.sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      state.sortKey = key;
      state.sortDirection = direction;
    },
    setEditField(
      state,
      action: PayloadAction<{ id: number; field: string } | null>
    ) {
      state.editField = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<typeof initialState.data>) => {
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { updateCell, sortData, setEditField, setError } =
  tableSlice.actions;
export default tableSlice.reducer;
