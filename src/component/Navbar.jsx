import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../store/priceSlice";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();

  return (
    <div className=" justify-center content-center flex-wrap w-screen h-1/5 ">
      <div className="pb-8 grid grid-cols-1 flex justify-center content-center w-screen font-sans text-3xl text-center font-bold text-yellow-400">
        Crypto Tracking
      </div>
      <div className="flex justify-center grid grid-cols-3 gap-8">
        <div className="pb-8  flex content-center  justify-center">
          <button className="btn btn-warning w-24 md:w-36">
            <Link to="/">home</Link>
          </button>
        </div>
        <div className="pb-8  flex content-center justify-center ">
          <button className="btn btn-warning w-24 md:w-36">
            <Link to="/fav">Favorite list</Link>
          </button>
        </div>
        <div className="pb-8 flex justify-center content-center  dropdown ">
          <label tabIndex={0} className="btn btn-warning w-24 md:w-36 ">
            CURRENCY SELECT
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => dispatch(changeCurrency("AUD"))}>AUD</a>
            </li>
            <li>
              <a onClick={() => dispatch(changeCurrency("USD"))}>USD</a>
            </li>
            <li>
              <a onClick={() => dispatch(changeCurrency("GBP"))}>GBP</a>
            </li>
            <li>
              <a onClick={() => dispatch(changeCurrency("CNY"))}>CNY</a>
            </li>
            <li>
              <a onClick={() => dispatch(changeCurrency("EUR"))}>EUR</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
