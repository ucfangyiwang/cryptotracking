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

  return (
    <div className=" w-full flex justify-center content-center  ">
      <div className="grid grid-cols-7 gap-2 md:gap-8 xl:gap-16 ">
        <div className="text-center">Logo</div>
        <div className="text-center">name</div>
        <div className="text-center">price</div>
        <div className="text-center">24h change %</div>
        <div className="text-center">24h high</div>
        <div className="text-center">24h low</div>
        <div className="text-center">favorite</div>

        {list !== undefined &&
          list.map((coin) => {
            return (
              <>
                <div className="flex justify-center content-center">
                  <img className="w-6 h-6" src={coin.image} alt="image"></img>
                </div>
                <div className="text-center">{coin.symbol}</div>
                <div className="text-center">{coin.current_price}</div>
                {coin.price_change_percentage_24h > 0 ? (
                  <div className="text-emerald-500 text-center">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                ) : (
                  <div className="text-rose-500 text-center">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                )}

                <div className="text-center">{coin.high_24h}</div>
                <div className="text-center">{coin.low_24h}</div>
                <FavoriteCoin
                  className="flex justify-center"
                  key={coin.name}
                  coin={coin}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default CryptoPrice;
