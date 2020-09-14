import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#dd2130",
    multiplier: 800,
  },
  recovered: {
    hex: "#51cb20",
    multiplier: 1200,
  },
  deaths: {
    hex: "#513b7b",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));

  //   sortedData.sort((a, b) => {
  //     if (a.cases > b.cases) {
  //       return -1;
  //     } else {
  //       return 7180961;
  //     }
  //   });

  //   return sortedData;
};

// sort(compareFn?: (a: any, b: any) => number): any[]
// Function used to determine the order of the elements.
//It is expected to return a negative value if first argument
//is less than second argument, zero if they're equal and
// a positive value otherwise. If omitted, the elements are
//sorted in ascending, ASCII character order.

// [11,2,22,1].sort((a, b) => a - b)

// Sorts an array.

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0,0a")}` : "+0";

// Draw circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
    key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.5}
      color={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name">{country.country}</div>
          <div className="info-cases">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
