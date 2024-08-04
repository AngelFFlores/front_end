import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Users } from './pages/Users'
import { Orders } from './pages/Orders'
import { Clients } from './pages/Clients'
import { Login } from './pages/Login'
import { ProtectedRoute } from './pages/ProtectedRoute'

const RoutesConfig = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/' element={<ProtectedRoute />}>
      <Route path='/inicio' element={<Home />} />
      <Route path='/usuarios' element={<Users />} />
      <Route path='/ordenes' element={<Orders />} />
      <Route path='/clientes' element={<Clients />} />
    </Route>
  </Routes>
);

export default RoutesConfig;