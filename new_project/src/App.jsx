import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [weather, setCurrentWeather] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=7053581a85ad4febb92173004232510&q=Chelyabinsk&aqi=no"
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCurrentWeather(data.current);
        setLocation(data.location);
      });
  }, []);
  return (
    <div className="App">
      <Search active={false}/>
      {weather ? (
        <Main
          location={location}
          temperature={weather.temp_c}
          condition={weather.condition}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
