import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([""]);
  const [country, setCountry] = useState("worldwide");

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

  const onCountryChange = (event) => {
    const countrycode = event.target.value;
    setCountry(countrycode);
  };

  // map vs forEach : map -> return an object && forEach return nothing
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* Loop throught all the countries and show dropdown */}
            <MenuItem value="worldwide">Worlwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value} key={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={2000} total={1233}/>
        <InfoBox title="Recovered" cases={2000} total={3000} />
        <InfoBox title="Deaths" cases={2000} total={3040}/>
      </div>
      {/* Tables */}
      {/* Graph */}

      {/* Map */}
      <Map />
    </div>
  );
}

export default App;
