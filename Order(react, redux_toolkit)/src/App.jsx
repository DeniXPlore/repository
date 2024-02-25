import { ordered, restoked } from "./features/cake/cakeSlice";
import store from "./features/store";
import UserView from "./components/UserView";
import CakeView from "./components/CakeView";
import IceCreamView from "./components/IceCreamView";

function App() {
  return <>
  <CakeView/>
  <IceCreamView/>
  <UserView/>
  </>;
}

export default App;
