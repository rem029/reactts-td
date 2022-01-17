import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Item } from "../types/";
import dummyData from "../dummyData";

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

export const fetchListItems = createAsyncThunk(
  "list/fetchItems",
  async () => {
    await delay(2000);
    return [...dummyData.slice(0, 3)] as Item[];
  },
  {}
);

export interface ListState {
  status: "idle" | "loading" | "success" | "fail";
  data: Item[];
  errors?: any;
}

const initialState: ListState = {
  status: "idle",
  data: [],
  errors: null,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      return { ...state, data: [...state.data, action.payload] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListItems.pending, (state) => {
      return { ...state, status: "loading" };
    });

    builder.addCase(fetchListItems.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        data: [...state.data, ...action.payload],
      };
    });
    builder.addCase(fetchListItems.rejected, (state, action) => {
      return { ...state, status: "fail", error: action.error };
    });
  },
});

export const { addItem } = listSlice.actions;
export const getListItems = (state: RootState) => state.list.data;
export const getListStatus = (state: RootState) => state.list.status;

export default listSlice.reducer;
