import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const options = {
  letgend: {
    display: false,
  },
  elements: {
    point: {
      reduis: 0,
    },
  },
};

function LineGraph() {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data[casesType]) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((reponse) => reponse.json())
      .then((data) => {
        const chartData = buildChartData(data);
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <h1>I am a graph</h1>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: "rgba(204, 16, 52, 0)",
              borderColor: "#FCC1034",
              data: data,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default LineGraph;
