import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { Navbar } from '../components/Navbar'

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <>
      <Navbar />
      <main className='container-fluid mx-2'>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to='/' />
  )
}