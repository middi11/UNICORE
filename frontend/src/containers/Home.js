import Test from './Test';
import Test1 from './Test1';
import React, {useState} from 'react'
import { GoogleMap, useLoadScript, Marker } from "@googlemaps/react-wrapper"
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { BsSearch } from "react-icons/bs";
Chart.register(...registerables);

const Home = () => {

  const [name, setName] = useState("")

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  const dataPie = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: ["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300"],
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  return (
    <div className='container mt-4'>
      <div className='p-4'>
        <form className='row justify-content-around'>
          <label for="exampleFormControlSelect1" className='d-flex col-lg-1 align-items-center'>Timeframe:</label>
          <div className="form-group col-lg-3">
            <select className="form-control">
              <option>Sept 2022 - Oct 2022</option>
              <option>Oct 2022 - Nov 2022</option>
              <option>Nov 2022 - Dec 2022</option>
            </select>
          </div>
          <div className="form-group col-lg-3">
            <select className="form-control">
              <option value="" className='text-secondary'>Estate</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-lg-3">
            <select className="form-control">
              <option value="" className='text-secondary'>State</option>
              <option>Selangor</option>
              <option>Selangor</option>
              <option>Selangor</option>
              <option>Selangor</option>
              <option>Selangor</option>
            </select>
          </div>
          <div className='col-2'>
            <BsSearch />
          </div>
        </form>
      </div>
      <div className='p-4 row justify-content-around'>
        <div className='text-center border rounded col-lg-3 shadow-sm'>
          <p>Number of Farmer</p>
          <h3>10</h3>
        </div>
        <div className='text-center border rounded col-lg-3 shadow-sm'>
          <p>Hectare</p>
          <h3>Test</h3>
        </div>
        <div className='text-center border rounded col-lg-3 shadow-sm'>
          <p>Number of Plot</p>
          <h3>35</h3>
        </div>
      </div>
      <div className='row'>
        <h4>Overall Progress</h4>
        <div className='col'>
          <Line data={data} />
        </div>
      </div>
      <div className='p-4 row justify-content-around'>
        <div className='border rounded col-lg-5 shadow-sm p-3'>
          <p className='fw-bold'>Ladang Sekinchan</p>
          <img src="static/images/sekinchan-map.jpg" className="w-100" alt="" />
        </div>
        <div className='border rounded col-lg-5 shadow-sm p-3'>
          <p className='fw-bold'>Test</p>
          <div className='p-3 d-flex justify-content-center'>
            <Pie data={dataPie} className="w-50 h-50" />
          </div>
        </div>
      </div>
      <div className='p-4 row'>
        <div className='border rounded col-lg shadow-sm p-3'>
          <img src="static/images/Weather Graph.png" alt="" className='w-100' />
        </div>
      </div>
    </div>
  )
}

export default Home