import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { useAuth } from "../context/AuthProvider"

export const Navbar = () => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return null

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
        </a>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/usuarios' className="nav-link">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/ordenes' className="nav-link">Ordenes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/clientes' className="nav-link">Clientes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}