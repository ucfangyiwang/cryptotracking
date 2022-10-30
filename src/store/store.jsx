import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceSlice";
import favSlice from "./favSlice";
export default configureStore({
  reducer: {
    price: priceSlice,
    fav: favSlice,
  },
});
