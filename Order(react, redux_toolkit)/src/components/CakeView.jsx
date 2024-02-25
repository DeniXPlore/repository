import { useSelector, useDispatch } from "react-redux"
import { ordered, restoked } from "../features/cake/cakeSlice"

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restoked(5))}>Restock cake</button>
      </div>
  )
}
export default CakeView