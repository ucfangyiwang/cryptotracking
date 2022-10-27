import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/";
export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/",
  }),
  endpoints: (builder) => ({
    getCryptoByCurrency: builder.query<Object, string>({
      query: (currency: string) => ({
        url: "markets?vs_currency=${currency}&order=market_cap_desc&per_page=150&page=1&sparkline=false",
      }),
    }),
  }),
});
export const { useGetCryptoByCurrencyQuery } = cryptoApi;
export default cryptoApi;
