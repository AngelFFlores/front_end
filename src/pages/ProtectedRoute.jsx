import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { Navbar } from '../components/Navbar'

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <>
      <Navbar />
      <main className='container-xl px-3'>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to='/' />
  )
}