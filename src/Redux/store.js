import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../CounterSlice";

export const store = configureStore({
  reducer: {
    meracounter: counterslice,
  },
});
