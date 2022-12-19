import { configureStore } from "@reduxjs/toolkit";
import smarthomeReducer from "./slices/smarthomes";

const reducer = {
  smarthomes: smarthomeReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
