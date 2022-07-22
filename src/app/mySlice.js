import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, addData, delData } from "./myAPI";

const initialState = {
  ar: [],
  value: 0,
  status: "idle",
};

export const getDataAsync = createAsyncThunk("my/fetchData", async (amount) => {
  const response = await fetchData(amount);
  return response.data;
});

export const addAsync = createAsyncThunk("my/addData", async (newProd) => {
  const response = await addData(newProd);
  console.log(newProd);
  return response;
});

export const delAsync = createAsyncThunk("my/delData", async (id) => {
  const response = await delData(id);

  console.log(id);
  return response;
});
export const mySlice = createSlice({
  name: "my",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.ar = [...state.ar, action.payload];
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = "Done";
        state.ar = action.payload;
      })
      .addCase(delAsync.fulfilled, (state, action) => {
        state.ar = state.ar.filter((x) => x.id !== action.payload);
        console.log("del");
        state.status = "Done";
      });
  },
});

// export const { } = mySlice.actions;
export const selectCount = (state) => state.my.value;
export const selectar = (state) => state.my.ar;
export default mySlice.reducer;
