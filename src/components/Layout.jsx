import React from 'react'
import { Navbar } from './Navbar'
import { AuthProvider } from '../context/AuthProvider'
import RoutesConfig from '../RoutesConfig'

export const Layout = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className='container-fluid mx-2'>
          <RoutesConfig />
        </main>
      </AuthProvider>
    </>
  )
}