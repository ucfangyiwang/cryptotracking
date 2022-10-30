import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../store/priceSlice";
function Header() {
  const dispatch = useDispatch();

  return (
    <div className=" flex justify-between px-6 w-screen h-16  ">
      <div className="flex justify-center  font-sans text-2xl font-bold text-yellow-400">
        Crypto Tracking
      </div>

      <div className="flex justify-center content-center dropdown ">
        <label tabIndex={0} className="btn m-1 ">
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
  );
}
export default Header;
