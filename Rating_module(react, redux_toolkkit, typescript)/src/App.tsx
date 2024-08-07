import Rating from "./Rating";
import { Provider } from "react-redux";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <Rating numberOfStars={10} />
    </Provider>
  );
}

export default App;
