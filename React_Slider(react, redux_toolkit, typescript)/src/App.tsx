import ImageSlider from "./ImageSlider";
import { Provider } from 'react-redux';
import { store } from './features/store';

function App() {
  return (
    <Provider store={store}>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={1}
      />
    </Provider>
  );
}

export default App;
