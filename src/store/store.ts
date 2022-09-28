import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { homePageAPI } from "../api/defaultAPI";

const rootReducer = combineReducers({
  [homePageAPI.reducerPath]: homePageAPI.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(homePageAPI.middleware),
  devTools: true
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
