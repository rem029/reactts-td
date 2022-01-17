import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import listReducer from "./listSlice";

const store = configureStore({
  reducer: { list: listReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    thunk,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
