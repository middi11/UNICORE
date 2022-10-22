import React from 'react'
import {Route, Navigate, Outlet} from 'react-router-dom'
import {connect} from 'react-redux'

function PrivateRouteMain({isAunthenticated}) {
  return isAunthenticated ? <Outlet/>: <Navigate to="/"/>
}

const mapStateToProps = state => ({
    isAunthenticated : state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(PrivateRouteMain)