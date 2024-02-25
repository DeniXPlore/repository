import { useDispatch, useSelector } from "react-redux";
import { ordered, restoked } from "../features/icecream/icecreamSlice";
import { useState } from "react";

const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of ice creams - {numOfIcecreams} </h1>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restoked(value))}>Restock ice creams</button>
    </div>
  );
};
export default IceCreamView;
