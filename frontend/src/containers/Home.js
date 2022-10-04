import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@googlemaps/react-wrapper"
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
      <div className='p-4'>
        <form className='row justify-content-around'>
          <label for="exampleFormControlSelect1" className='col-lg'>Timeframe</label>
          <div className="form-group col-lg">
            <select className="form-control">
              <option>Sept 2022 - Oct 2022</option>
              <option>Oct 2022 - Nov 2022</option>
              <option>Nov 2022 - Dec 2022</option>
            </select>
          </div>
          <div className="form-group col-lg">
            <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-lg">
            <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
      </div>
      <div className='p-4 row'>
        <div className='border rounded col-lg shadow-sm'>
          <h3>Test</h3>
        </div>
        <div className='border rounded col-lg shadow-sm'>
          <h3>Test</h3>
        </div>
        <div className='border rounded col-lg shadow-sm'>
          <h3>Test</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Line data={data} />
        </div>
      </div>
      <div className='p-4 row'>
        <div className='border rounded col-lg shadow-sm'>
          <h3>Test</h3>
        </div>
        <div className='border rounded col-lg shadow-sm'>
          <h3>Test</h3>
        </div>
      </div>
      <div className='p-4 row'>
        <div className='border rounded col-lg shadow-sm'>
          <h3>Test</h3>
        </div>
      </div>
    </div>
  )
}

export default Home