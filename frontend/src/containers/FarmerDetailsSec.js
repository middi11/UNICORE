import React from 'react'
import { Doughnut, Bar } from "react-chartjs-2";

const FarmerDetailsSec = () => {
    const options = {
        legend: {
            display: false,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        }
    };

    const optionsBar = {
        legend: {
            display: false,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        scales: {
            xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }],
            yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 100
                    }
                }]
        },
    };

    const dataDoughnut = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["a", "b", "c", "d"],
        datasets: [
            {
                data: [300, 50, 100, 50],
                backgroundColor: ["#e60049", "#0bb4ff", "#50e991", "#e6d800"],
                hoverBackgroundColor: 'rgba(0, 255, 0, 0.2)'
            }
        ]
    };

    const dataBar = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["a", "b", "c", "d"],
        datasets: [
            {
                data: [300, 50, 100, 50],
                backgroundColor: ["#e60049", "#0bb4ff", "#50e991", "#e6d800"],
                hoverBackgroundColor: 'rgba(0, 255, 0, 0.2)'
            }
        ]
    };

    return (
        <div className='container mt-4'>
            <div className='row justify-content-around'>
                <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                    <h5>Farmer Details</h5>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Farmer ID</th>
                                <td>A12ER345</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>Lot A,B,C</td>
                            </tr>
                            <tr>
                                <th scope="row">Land Area</th>
                                <td>30 Hectare</td>
                            </tr>
                            <tr>
                                <th scope="row">Previous Harvest</th>
                                <td>70 Tonnes (10%)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                    <h5>Location Details</h5>
                    <img src="static/images/sekinchan-map-2.jpg" alt="" className='w-100' />
                </div>
            </div>
            <div className='row justify-content-around'>
                <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                    <h5>Job Progress</h5>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <Doughnut data={dataDoughnut} options={options} className="w-100 h-100" />
                        </div>
                        <div className='col-lg-5 text-light d-flex align-items-center justify-content-center'>
                            <p className='bg-primary border-3 rounded p-2'>All Progress</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <Doughnut data={dataDoughnut} options={options} className="w-100 h-100" />
                        </div>
                        <div className='col-lg-5 text-light d-flex align-items-center justify-content-center'>
                            <p className='bg-primary border-3 rounded p-2'>All Progress</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <Doughnut data={dataDoughnut} options={options} className="w-100 h-100" />
                        </div>
                        <div className='col-lg-5 text-light d-flex align-items-center justify-content-center'>
                            <p className='bg-primary border-3 rounded p-2'>All Progress</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <Doughnut data={dataDoughnut} options={options} className="w-100 h-100" />
                        </div>
                        <div className='col-lg-5 text-light d-flex align-items-center justify-content-center'>
                            <p className='bg-primary border-3 rounded p-2'>All Progress</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                    <h5>Profit Per Cycle</h5>
                    <div className='h-100'>
                        <Bar data={dataBar} options={optionsBar} className="d-flex align-items-center" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmerDetailsSec