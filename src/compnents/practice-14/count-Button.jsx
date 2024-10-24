import { useDispatch } from "react-redux";
import { handleIncreaseCountValue } from "./counterSlice";

function CountButton() {

  const dispatch = useDispatch();
  function handleclick (){
    dispatch(handleIncreaseCountValue());
  }
  return (
    <button onClick={handleclick}> increase count </button>
  );
}

export default CountButton;