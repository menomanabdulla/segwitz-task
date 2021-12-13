import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '../state/authSlice'

const ProtectedRoute = ({ children }) => {
    const user = useSelector(selectUser)
    const isLoggedin = localStorage.getItem('segIsLoggedin')
    const location = useLocation();
    if (!user && !isLoggedin) {
        return <Navigate to="/" state={{ from: location }} />
    }
    return children;
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
    children: PropTypes.element
}

ProtectedRoute.defaultProps = {
    children: null
}