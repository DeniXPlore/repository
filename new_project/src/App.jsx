import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [currentWeather, setCurrentWeather] = useState(false);

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=7053581a85ad4febb92173004232510&q=Chelyabinsk&aqi=no"
    )
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setTimeout(() => {
          setCurrentWeather(data.current);
        }, 4000);
      });
  }, []);
  return (
    <div className="App">
      {currentWeather ? (
        <Main props={currentWeather.condition} />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
