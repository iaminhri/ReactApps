import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //converts string array to value array
    const totalMax = Math.max(...dataPointValues); // receives 12 args of months as an array.

    return (
        <div className='chart'>
          {props.dataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMax}
              label={dataPoint.label}
            />
          ))}
        </div>
      );
}

export default Chart;

