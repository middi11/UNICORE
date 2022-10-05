import React from 'react'

const Report = () => {
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
      <div className='my-3 shadow p-3 mb-5 bg-white rounded p-3'>
        <div className='d-flex justify-content-around'>
          <p>Farmer Report</p>
          <a href="" className='btn btn-primary'>Download Report</a>
        </div>
        <div className='d-flex justify-content-center'>
          <img src="/static/images/test.jpg" alt="" />
        </div>
      </div>
      <div className='my-3 shadow p-3 mb-5 bg-white rounded p-3'>
        <div className='d-flex justify-content-around'>
          <p>Management Report</p>
          <a href="" className='btn btn-primary'>Download Report</a>
        </div>
        <div className='d-flex justify-content-center'>
          <img src="/static/images/test.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Report