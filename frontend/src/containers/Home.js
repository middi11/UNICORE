import React from 'react'
import {GoogleMap, useLoadScript, Marker} from "@googlemaps/react-wrapper"
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Home = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  return (
    <div className='container mt-4'>
      <h3>Home</h3>
      <div className='row'>
        <div className='col'>
          test
        </div>
        <div className='col'>
          <Line data={data} />
        </div>
      </div>
    </div>
  )
}

export default Home