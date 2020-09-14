import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) { 
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
          {countries.map(({ country, cases, recovered, deaths, countryInfo }) => (
            <tr key={country}>
              <td> 
                <><img alt="" src={countryInfo.flag} />{country}</>
              </td>
              <td>{numeral(cases).format("0,0")}</td>
              <td>{numeral(recovered).format("0,0")}</td>
              <td>{numeral(deaths).format("0,0")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
