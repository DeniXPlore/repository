import { Provider } from "react-redux";
import Color from "./components/Color";
import store from "./features/store";



function App() {
  return (
    <Provider store={store}>
      <Color />
    </Provider>
  );
}

export default App;
