import React from 'react'
import { AuthProvider } from '../context/AuthProvider'
import RoutesConfig from '../RoutesConfig'

export const Layout = () => {
  return (
    <>
      <AuthProvider>
        <RoutesConfig />
      </AuthProvider>
    </>
  )
}