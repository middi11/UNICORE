import React from 'react'

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
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
            </div>
            <div className='row my-3 justify-content-around'>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
            </div>
            <div className='row my-3 justify-content-around'>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PlantProgress