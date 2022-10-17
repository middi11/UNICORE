import React from 'react'
import { BsCheckLg } from "react-icons/bs";

const PlantProgressDetails = () => {
    return (
        <div className='container mt-4'>
            <div className='shadow p-3 mb-5 bg-white rounded'>
                <h4>Checklist</h4>
                <div className='row justify-content-around text-light'>
                    <div className='col-lg-2 bg-primary border rounded'>
                        <p className='text-light'>Land Management</p>
                        <h4 className='text-light'>100%</h4>
                    </div>
                    <div className='col-lg-2 bg-secondary border rounded'>
                        <p className='text-light'>Planting</p>
                        <h4 className='text-light'>100%</h4>
                    </div>
                    <div className='col-lg-2 bg-success border rounded'>
                        <p className='text-light'>Water Management</p>
                        <h4 className='text-light'>80%</h4>
                    </div>
                    <div className='col-lg-2 bg-info border rounded'>
                        <p className='text-light'>Fertilizing</p>
                        <h4 className='text-light'>70%</h4>
                    </div>
                    <div className='col-lg-2 bg-dark border rounded'>
                        <p className='text-light'>Pest Control</p>
                        <h4 className='text-light'>65%</h4>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                        <p className='fw-bold'>Ladang Sekinchan</p>
                    </div>
                    <img src="static/images/paddyfield.jpg" className="w-100" alt="" />
                </div>
                <div className='col-lg-8'>
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" colspan="2">Checklist</th>
                                <th scope="col" colspan="100%">Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-success fw-bold'>
                                <th scope="row">1</th>
                                <th scope="row" colspan="2">Land Management</th>
                                <th scope="row">W1</th>
                                <th scope="row">W2</th>
                                <th scope="row">W3</th>
                                <th scope="row">W4</th>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Land Management Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Land Management Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                            </tr>
                            <tr className='bg-success fw-bold'>
                                <th scope="row">1</th>
                                <th scope="row" colspan="2">Planting</th>
                                <th scope="row">W1</th>
                                <th scope="row">W2</th>
                                <th scope="row">W3</th>
                                <th scope="row">W4</th>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Planting Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td className='text-center'></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Planting Criteria</td>
                                <td className='text-center'></td>
                                <td></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td className='text-center'><BsCheckLg/></td>
                            </tr>
                            <tr className='bg-success fw-bold'>
                                <th scope="row">1</th>
                                <th scope="row" colspan="2">Water Management</th>
                                <th scope="row">W1</th>
                                <th scope="row">W2</th>
                                <th scope="row">W3</th>
                                <th scope="row">W4</th>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Water Management Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Water Management Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td className='text-center'></td>
                                <td></td>
                            </tr>
                            <tr className='bg-success fw-bold'>
                                <th scope="row">1</th>
                                <th scope="row" colspan="2">Fertilizing</th>
                                <th scope="row">W1</th>
                                <th scope="row">W2</th>
                                <th scope="row">W3</th>
                                <th scope="row">W4</th>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Fertilizing Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Fertilizing Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                            </tr>
                            <tr className='bg-success fw-bold'>
                                <th scope="row">1</th>
                                <th scope="row" colspan="2">Pest Control</th>
                                <th scope="row">W1</th>
                                <th scope="row">W2</th>
                                <th scope="row">W3</th>
                                <th scope="row">W4</th>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Pest Control Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className='text-center'>Test Pest Control Criteria</td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                                <td className='text-center'><BsCheckLg/></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PlantProgressDetails