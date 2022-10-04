import React from 'react'

const FarmerDetailsSec = () => {
  return (
    <div className='container mt-4'>
        <div className='row justify-content-around'>
            <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                <h5>Farmer Details</h5>
            </div>
            <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                <h5>Location Details</h5>
            </div>
        </div>
        <div className='row justify-content-around'>
            <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                <h5>Job Progress</h5>
            </div>
            <div className='col-lg-5 shadow p-3 mb-5 bg-white rounded'>
                <h5>Profit Per Cycle</h5>
            </div>
        </div>
    </div>
  )
}

export default FarmerDetailsSec