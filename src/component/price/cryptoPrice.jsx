import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../store/priceSlice";
import FavoriteCoin from "../favorite/favoriteCoin";
function CryptoPrice() {
  const dispatch = useDispatch();
  const { list, currency } = useSelector((store) => store.price);
  const { favlist } = useSelector((store) => store.fav);
  console.log(list);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(loadData());
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  // const filteredCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className=" w-full flex justify-center content-center  ">
      <table className="table-auto">
        <thead className="">
          <tr className="text-base">
            <th className="px-8">Logo</th>
            <th className="px-8">name</th>
            <th className="px-8">price</th>
            <th className="px-8">24h change %</th>
            <th className="px-8">24h high</th>
            <th className="px-8">24h low</th>
            <th className="px-8">favorite</th>
          </tr>
        </thead>
        <tbody>
          {list !== undefined &&
            list.map((coin) => {
              return (
                <tr>
                  <td className="flex justify-center content-center">
                    <img className="w-6 h-6" src={coin.image} alt="image"></img>
                  </td>
                  <td className="text-center">{coin.symbol}</td>
                  <td className="text-center">{coin.current_price}</td>
                  {coin.price_change_percentage_24h > 0 ? (
                    <td className="text-emerald-500 text-center">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="text-rose-500 text-center">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  )}

                  <td className="text-center">{coin.high_24h}</td>
                  <td className="text-center">{coin.low_24h}</td>
                  <FavoriteCoin
                    className="flex justify-center"
                    key={coin.name}
                    coin={coin}
                  />
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoPrice;