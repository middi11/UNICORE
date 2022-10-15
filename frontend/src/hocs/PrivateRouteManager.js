import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'

function PrivateRouteManager({isAunthenticated, isRole, children}) {
  return isAunthenticated && (isRole === "Manager") ? children: <Navigate to="/"/>
}

const mapStateToProps = state => ({
    isAunthenticated : state.auth.isAuthenticated,
    isRole : state.profile.role
})

export default connect(mapStateToProps, {})(PrivateRouteManager)