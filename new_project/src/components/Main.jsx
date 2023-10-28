function Main({ condition, temperature, location }) {
  console.log(condition);
  return (
    <div className="main">
      <div className="temperature">
        {temperature}
        <sup>o</sup>C
      </div>
      <div className="location-info">
        <div className="location">
          <div className="condition">{condition.text}</div>
          <div className="location-title">
            {location.name}, {location.country}
          </div>
        </div>
        <div className="icon">
          <img className="weather-icon" src={condition.icon} alt="weather icon"/>
        </div>
      </div>
    </div>
  );
}

export default Main;
