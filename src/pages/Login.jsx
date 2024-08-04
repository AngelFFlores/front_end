import { useAuth } from "../context/AuthProvider"
import { Navigate} from 'react-router-dom'

export const Login = () => {
  const { isAuthenticated, sigNin } = useAuth()
  if (isAuthenticated) {
    return <Navigate to="/inicio" />
  }

  const onSubmit = () => sigNin()
 
  return (
    <>
    <h1>Login</h1>
    <button onClick={onSubmit}>inciiar</button>
    </>
  )
}