import { removeCoinfromList } from "../store/favSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FavoriteCoinList() {
  const { favlist } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
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
        {favlist !== undefined &&
          favlist.map((coin) => {
            return (
              <>
                <div className="flex justify-center content-center">
                  <img
                    className="w-6  md:w-12  lg:w-16 "
                    src={coin.image}
                    alt="image"
                  ></img>
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
                <div className="  w-1/8 bg-gray-100 p-1 text-xs rounded-md self-center text-center cursor-pointer">
                  <button
                    className="w-full"
                    onClick={() => dispatch(removeCoinfromList(coin))}
                  >
                    remove
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
export default FavoriteCoinList;
