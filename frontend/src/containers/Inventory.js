import React from 'react'

const Inventory = () => {
    return (
        <div className='container mt-4'>
            <div className='shadow p-3 mb-5 bg-white rounded'>
                <h5>Inventory</h5>
                <div className='row justify-content-around p-2'>
                    <div className='col-lg mx-2 shadow-sm p-3 mb-5 rounded bg-warning'>
                        <p className='text-light'>Low Stock</p>
                    </div>
                    <div className='col-lg mx-2  shadow-sm p-3 mb-5 rounded bg-danger'>
                        <p className='text-light'>Out Of Stock</p>
                    </div>
                    <div className='col-lg mx-2  shadow-sm p-3 mb-5 rounded bg-secondary'>
                        <p className='text-light'>Zero Stock</p>
                    </div>
                    <div className='col-lg mx-2  shadow-sm p-3 mb-5 rounded bg-dark'>
                        <p className='text-light'>Void Stock</p>
                    </div>
                    <div className='col-lg mx-2  shadow-sm p-3 mb-5 rounded bg-success'>
                        <p className='text-light'>Total Product</p>
                    </div>
                </div>
            </div>
            <div className='shadow p-3 mb-5 bg-white rounded'>
                <h5>Recent Purchased Inventory</h5>
                <div className='p-2'>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Purchased Date</th>
                                <th scope="col">Ref No.</th>
                                <th scope="col">Vendor Name</th>
                                <th scope="col">Order Subtotal</th>
                                <th scope="col">Order Charge Subtotal</th>
                                <th scope="col">Order Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>23</td>
                                <td>Otto</td>
                                <td>1234</td>
                                <td>12412</td>
                                <td>23435</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>442</td>
                                <td>Thornton</td>
                                <td>1234</td>
                                <td>12412</td>
                                <td>23435</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>21422</td>
                                <td>the Bird</td>
                                <td>1234</td>
                                <td>12412</td>
                                <td>23435</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='shadow p-3 mb-5 bg-white rounded'>
                <h5>Purchased Product</h5>
                <div className='p-2'>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">SKU</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>32</td>
                                <td>RM 53.34</td>
                                <td>RM 2345.23</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>32</td>
                                <td>RM 53.34</td>
                                <td>RM 2345.23</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>32</td>
                                <td>RM 53.34</td>
                                <td>RM 2345.23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Inventory