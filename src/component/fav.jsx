import { removeCoinfromList } from "../store/favSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FavoriteCoinList() {
  const { favlist } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
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
          {favlist !== undefined &&
            favlist.map((coin) => {
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
                  <td className="  w-1/8 bg-gray-100 p-1 text-xs rounded-md self-center text-center cursor-pointer">
                    <button
                      className="w-full"
                      onClick={() => dispatch(removeCoinfromList(coin))}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default FavoriteCoinList;
