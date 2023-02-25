import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonServerApi } from "./services/jsonService";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    [jsonServerApi.reducerPath]: jsonServerApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([jsonServerApi.middleware]),
});

setupListeners(store.dispatch);
