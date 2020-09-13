import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState(['']);

  useEffect(() => {
    // fire on [] ci'
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };

    getCountriesData();

  }, []);

  // map vs forEach : map -> return an object && forEach return nothing
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop throught all the countries and show dropdown */}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
