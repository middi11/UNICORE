import React from 'react'

const Repository = () => {
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
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Person In Charge</th>
                        <th scope="col">Status</th>
                        <th scope="col">Report</th>
                        <th scope="col">Plant Drawings</th>
                        <th scope="col">Others</th>
                        <th scope="col">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Sungai Pele</th>
                        <td>Hamidun Hamid</td>
                        <td>Good</td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td>No Remarks</td>
                    </tr>
                    <tr>
                        <th scope="row">Sungai Pele</th>
                        <td>Hamidun Hamid</td>
                        <td>Good</td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td>No Remarks</td>
                    </tr>
                    <tr>
                        <th scope="row">Sungai Pele</th>
                        <td>Hamidun Hamid</td>
                        <td>Good</td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td><a className='btn btn-primary' href="">Download here</a></td>
                        <td>No Remarks</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Repository