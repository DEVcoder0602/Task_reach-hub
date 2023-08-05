import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlices";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
