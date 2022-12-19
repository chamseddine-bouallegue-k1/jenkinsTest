import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SmarthomeService from "../Services/SmarthomeService";

const initialState = [];

export const createSmarthome = createAsyncThunk(
  "smarthomes/create",
  async (smarthome) => {
    const res = await SmarthomeService.create(smarthome);
    return res.data;
  }
);

export const retrieveSmarthomes = createAsyncThunk(
  "smarthomes/retrieve",
  async () => {
    const res = await SmarthomeService.getAll();
    return res.data;
  }
);

const smarthomeSlice = createSlice({
  name: "smarthome",
  initialState,
  extraReducers: {
    [createSmarthome.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveSmarthomes.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = smarthomeSlice;
export default reducer;
