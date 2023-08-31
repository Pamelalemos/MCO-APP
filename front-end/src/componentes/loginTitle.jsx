import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px; 
  color: black;
  margin-top: 40%;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 20px;
  color: black;
  margin-left: -62%;
 
`;

const Subtitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Raleway';
  font-size: 15px;
  margin-bottom: 20px;
  color: black;
  margin-left: -35%;
`;

const Subtitle2 = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Raleway';
  font-size: 15px;
  margin-bottom: 10px;
  color: black;
  margin-left: -15%;
`;

const LoginTitle = () => {
  return (
    <TitleContainer>
      <Title>Login</Title>
      <Subtitle>Bienvenido de nuevo.</Subtitle>
      <Subtitle2>Por favor ingresá tus datos.</Subtitle2>
    </TitleContainer>
  );
};

export default LoginTitle;
