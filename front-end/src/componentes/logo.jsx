import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';

const LogoContainer = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
  width: 350px; /* Ajusta el ancho según tus preferencias */
  height: auto;
  margin-left: -10%;
  margin-top: -10%;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logoImage} alt="Logo de la empresa" />
    </LogoContainer>
  );
}

export default Logo;
