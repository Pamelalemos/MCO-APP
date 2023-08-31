import React, { useState } from 'react';
import Input from '../componentes/inputs'; 
import { Link } from 'react-router-dom'; 
import Logo from '../componentes/logo';
import '../styles/login.css';
import styled from 'styled-components';
import LoginTitle from '../componentes/loginTitle';

const LoginConteiner = styled.div`
  display: flex;
  font-family: 'DM Serif Display', serif; 
  margin-top: -10rem;
  margin-left: -20%;
`;


const ForgotPassword = styled.a`
  display: block;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  text-align: right;
  margin-top: -1rem; /* Ajusta el margen superior según sea necesario */
  font-size: 0.8rem; /* Ajusta el tamaño de la fuente según sea necesario */
  position: relative; /* Añade posición relativa */
  right: -35%; /* Ajusta la distancia hacia la derecha */
  color: #676767;
`;
 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  return (
    <div>
      <div className="login-container">
        <div className="form-container">
          <LoginConteiner>
            <LoginTitle/>
          </LoginConteiner>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="ejemplo@gmail.com"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
            />
            <ForgotPassword className='forgot-password' href="#">Olvidé mi contraseña</ForgotPassword>
            <Link to="/registro">
              <button className='button' type="submit">Login</button>
            </Link>
          </form>
        </div>
        <div className="logo-container">
          <Logo/>
        </div>
      </div>
    </div>
  );
};

export default Login;