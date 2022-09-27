import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Container from 'react-bootstrap/Container'
import './containers.css'


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()

        login(email, password)
    }

    if (isAuthenticated) {
        return <Navigate to='/home' />
    }

    return (
        <div id="main-login-cont" className='d-grid container h-100'>
            <div id="sec-login-cont" className='container p-5'>
                <h1>Login</h1>
                <p>Login into your account</p>
                <form onSubmit={e => onSubmit(e)} className="text-center">
                    <div className='form-group mt-4'>
                        <input type="email" className='form-control' placeholder='Email' name='email' value={email} onChange={e => onChange(e)} required />
                    </div>
                    <div className='form-group mt-4'>
                        <input type="password" className='form-control' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} minLength='6' required />
                    </div>
                    <button className='btn btn-primary mt-4' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)