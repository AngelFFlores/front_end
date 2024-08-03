import React from 'react';
import { Navbar } from './Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Users } from '../pages/Users';
import { Orders } from '../pages/Orders';
import { Clients } from '../pages/Clients';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/usuarios' element={<Users />} />
          <Route path='/ordenes' element={<Orders />} />
          <Route path='/clientes' element={<Clients />} />
        </Routes>
      </main>
    </>
  );
}

export default Layout;