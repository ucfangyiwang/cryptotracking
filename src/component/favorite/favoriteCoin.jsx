import { addCoinToList, removeCoinfromList } from "../../store/favSlice";
import { useDispatch, useSelector } from "react-redux";

function FavoriteCoin(props) {
  const dispatch = useDispatch();
  const { favlist } = useSelector((store) => store.fav);

  const findcoin = favlist.find(
    (findcoin) => findcoin.name === props.coin.name
  );
  return (
    <>
      {findcoin ? (
        <td className="  w-1/8 bg-gray-100 p-1 text-xs rounded-md self-center text-center cursor-pointer">
          <button
            className="w-full"
            onClick={() => dispatch(removeCoinfromList(props.coin))}
          >
            added
          </button>
        </td>
      ) : (
        <td className=" text- w-1/8 bg-yellow-500 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
          <button
            className="w-full"
            onClick={() => dispatch(addCoinToList(props.coin))}
          >
            add
          </button>
        </td>
      )}
    </>
  );
}
export default FavoriteCoin;
