function Main({ condition, temperature, location, onSearchButtonClick }) {
  return (
    <div className="main">
      <button className="btn-search" onClick={onSearchButtonClick}>
        <img src="/public/icons/SearchIcon.png" alt="search" />
      </button>
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
          <img
            className="weather-icon"
            src={condition.icon}
            alt="weather icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
