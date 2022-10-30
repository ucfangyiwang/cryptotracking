import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceSlice";

export default configureStore({
  reducer: {
    price: priceSlice,
  },
});
