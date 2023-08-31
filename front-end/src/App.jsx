import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Registro from './pages/registro';
import Casos from './pages/casos';
import Navbar from '../src/componentes/navBar';
import userPhoto from './assets/user.png';
import { DataProvider } from './DataContext';

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Mostrar la barra de navegación solo en las rutas de registro y casos */}
          <Route
            path="/registro"
            element={
              <>
                <Navbar userPhoto={userPhoto} />
                <Registro />
              </>
            }
          />
          <Route
            path="/casos"
            element={
              <>
                <Navbar userPhoto={userPhoto} />
                <Casos />
              </>
            }
          />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
