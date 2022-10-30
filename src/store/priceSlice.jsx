import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
var currency = "USD";

const loadpriceAPI = () =>
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
      currency +
      "&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  ).then((res) => res.json());

export const loadData = createAsyncThunk("drug/loadData", async () => {
  const res = await loadpriceAPI();

  return res;
});

export const priceSlice = createSlice({
  name: "cryptodata",
  initialState: {
    list: [],
    currency: "AUD",
  },
  reducers: {
    changeCurrency(state, { payload }) {
      if (state.currency !== payload) {
        currency = payload;
        console.log(payload);
        state.currency = payload;
        console.log(currency);
      }
    },
  },
  extraReducers: {
    [loadData.fulfilled](state, { payload }) {
      console.log(payload);
      state.list = payload;
    },
    [loadData.rejected](state, err) {
      console.log(err);
    },
    [loadData.pending](state) {
      console.log("processing");
    },
  },
});

export const { changeCurrency } = priceSlice.actions;
export default priceSlice.reducer;

// give up redux toolkit query
// export const cryptoApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.coingecko.com/api/v3/coins/",
//   }),
//   endpoints: (builder) => ({
//     getCryptoByCurrency: builder.query<Object, string>({
//       query: (currency: string) => ({
//         url: "markets?vs_currency=${currency}&order=market_cap_desc&per_page=150&page=1&sparkline=false",
//       }),
//     }),
//   }),
// });

// export const { useGetCryptoByCurrencyQuery } = cryptoApi;
// export default cryptoApi;
