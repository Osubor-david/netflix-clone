import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context/AuthContext'

function ProtectedRoute({children}) {
 const {user} = useGlobalContext()

 if (!user) {
    return <Navigate to='/signin'/>
 }
    return children
}

export default ProtectedRoute