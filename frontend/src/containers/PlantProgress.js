import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PlantProgress = () => {
    return (
        <div className='container mt-4'>
            <div className='my-3'>
                <form>
                    <div className='row justify-content-around w-100'>
                        <div className="col-lg-3 my-md-2">
                            <input className="form-control" type="text" placeholder='Search' />
                        </div>
                        <div className="col-lg-3 my-md-2">
                            <input className="form-control" type="text" placeholder='Search' />
                        </div>
                        <div className="col-lg-3 my-md-2">
                            <input className="form-control" type="text" placeholder='Search' />
                        </div>
                    </div>
                </form>
            </div>
            <div className='row my-3 justify-content-around'>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row my-3 justify-content-around'>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row my-3 justify-content-around'>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                    <div className='d-flex justify-content-around my-3'>
                        <Link to='/plantprogressdetails' className='btn btn-primary'>
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantProgress