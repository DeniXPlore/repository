import "./App.css";
import Main from "./components/Main";

function App() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=7053581a85ad4febb92173004232510&q=Chelyabinsk&aqi=no"
  )
    .then((data) => data.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
