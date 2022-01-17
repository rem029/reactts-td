import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Item } from "../../types";
import dummyData from "../../dummyData";

export interface ListState {
  status: "idle" | "loading" | "success" | "fail";
  data: Item[];
  errors: SerializedError | null;
}

const initialState: ListState = {
  status: "idle",
  data: [],
  errors: null,
};

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

export const fetchListItems = createAsyncThunk(
  "list/fetchItems",
  async () => {
    await delay(2000);
    const randonNum = Math.floor(Math.random() * 10);

    if (randonNum > 0 && randonNum <= 5)
      return [...dummyData.slice(0, 3)] as Item[];
    else {
      let error = new Error("random error occured");
      throw error;
    }
  },
  {}
);

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
      return { ...state, status: "loading", errors: null };
    });

    builder.addCase(fetchListItems.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        data: action.payload,
        errors: null,
      };
    });
    builder.addCase(fetchListItems.rejected, (state, action) => {
      return { ...state, status: "fail", errors: action.error };
    });
  },
});

export const { addItem } = listSlice.actions;
export const getListItems = (state: RootState) => state.list.data;
export const getListStatus = (state: RootState) => state.list.status;
export const getListErrors = (state: RootState) => state.list.errors;

export default listSlice.reducer;
