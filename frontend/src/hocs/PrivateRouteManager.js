import React from 'react'
import {Route, Navigate, Outlet} from 'react-router-dom'
import {connect} from 'react-redux'

function PrivateRouteManager({isAunthenticated, isRole}) {
  return isAunthenticated && (isRole === "Manager") ? <Outlet/>: <Navigate to="/"/>
}

const mapStateToProps = state => ({
    isAunthenticated : state.auth.isAuthenticated,
    isRole : state.profile.role
})

export default connect(mapStateToProps, {})(PrivateRouteManager)