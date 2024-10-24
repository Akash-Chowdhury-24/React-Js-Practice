import { useSelector } from "react-redux";




function CounterText() {

  const state = useSelector(state => state);

  const {countvalue} = state;
  return (
    <p>count is {countvalue}</p>
  );
}

export default CounterText;