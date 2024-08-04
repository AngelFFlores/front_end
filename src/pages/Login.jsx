import { useAuth } from "../context/AuthProvider"
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const { isAuthenticated, sigNin } = useAuth()
  if (isAuthenticated) {
    return <Navigate to="/inicio" />
  }

  const onSubmit = () => sigNin()

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm border-1 rounded-lg col-11 col-sm-8 col-md-6 col-lg-4">
        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
        <div className="card-body">
          <form>
            <div className="form-floating mb-3">
              <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com"  autoComplete="email" />
              <label htmlFor="inputEmail">Usuario</label>
            </div>
            <div className="form-floating mb-3">
              <input className="form-control" id="inputPassword" type="password" placeholder="Password"  autoComplete="current-password" />
              <label htmlFor="inputPassword">Contraseña</label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
              <label className="form-check-label" htmlFor="inputRememberPassword">Recordar contraseña</label>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
              <a className="small" href="password.html">¿Has olvidado tu contraseña?</a>
              <button className="btn btn-primary" onClick={onSubmit} >Login</button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center py-3">
          <div className="small"><a href="register.html">¿Necesito una cuenta? ¡Inscribirse!</a></div>
        </div>
      </div>
    </div>
  )
}