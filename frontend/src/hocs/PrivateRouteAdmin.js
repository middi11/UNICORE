import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'

function PrivateRouteAdmin({isAunthenticated, isRole, children}) {
  return isAunthenticated && (isRole === "Clerk") ? children: <Navigate to="/"/>
}

const mapStateToProps = state => ({
    isAunthenticated : state.auth.isAuthenticated,
    isRole : state.profile.role
})

export default connect(mapStateToProps, {})(PrivateRouteAdmin)