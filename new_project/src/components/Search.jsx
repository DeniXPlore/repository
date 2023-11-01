import React, { useEffect, useState } from "react";

// function Suggestion({id, title}) {
//   return <li>{title}</li>;  
// }

function Search({ active }) {
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (term !== "") {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=7053581a85ad4febb92173004232510&q=${term}&aqi=no`
      )
        .then((res) => res.json())
        .then((data) => console.log(data)
        // setSuggestions(data));
       
    // }
  }, [term]);

  return (
    <div className={`search-bar ${active ? "active" : ""}`}>
      <input
        onChange={(e) => {          
          setTerm(e.target.value);
        }}
        type="text"
        className="search-input"
        placeholder="Search your location..."
      />
      <button className="btn-search">
        <img src="/Icons/CloseIcon.png" alt="close" />
      </button>
      <div className="suggestions">
        {/* <ul>
          {suggestions.map((s) => (
            <Suggestion title={s.name} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Search;
