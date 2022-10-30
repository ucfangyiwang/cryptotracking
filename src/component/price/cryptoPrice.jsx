import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, loadData } from "../../store/priceSlice";
function CryptoPrice() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.price);
  console.log(list);

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch, list.currency]);

  // const filteredCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className=" w-screen flex justify-center content-center px-1/10 ">
      <table className="table-auto">
        <thead className="">
          <tr className="text-base">
            <th className="px-8">Logo</th>
            <th className="px-8">name</th>
            <th className="px-8">price</th>
            <th className="px-8">24h change %</th>
            <th className="px-8">24h high</th>
            <th className="px-8">24h low</th>
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
                  <td>{coin.symbol}</td>
                  <td>{coin.current_price}</td>
                  {coin.price_change_percentage_24h > 0 ? (
                    <td className="text-emerald-500">
                      {coin.price_change_percentage_24h}%
                    </td>
                  ) : (
                    <td className="text-rose-500">
                      {coin.price_change_percentage_24h}%
                    </td>
                  )}

                  <td>{coin.high_24h}</td>
                  <td>{coin.low_24h}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoPrice;
