import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const countries = ["India", "Usa", "Francia"];
  const handleCountryToggle = (country: string) => {
    let updatedCountries: string[];

    if (selectedCountries.includes(country)) {
      updatedCountries = selectedCountries.filter((c) => c !== country);
    } else {
      updatedCountries = [...selectedCountries, country];
    }

    setSelectedCountries(updatedCountries);
    setSelectAll(updatedCountries.length === countries.length);
  };
  const handleSelectAllToggle = () => {
    if (selectAll) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries);
    }

    setSelectAll(!selectAll);
  };
  return (
    <div className="App">
      <div className="checkbox-container">
        <h2>Countrys Checkbox:</h2>
        <label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllToggle}
          />
          Select All
        </label>

        {countries.map((country) => (
          <div key={country}>
            <label>
              <input
              className="custom-checkbox" 
                type="checkbox"
                checked={selectedCountries.includes(country)}
                onChange={() => handleCountryToggle(country)}
              />
              {country}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
