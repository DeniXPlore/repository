import Accordion from "./Accordion";
import { Provider } from "react-redux";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Accordion />
      </div>
    </Provider>
  );
}

export default App;
