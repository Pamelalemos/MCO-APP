import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const appStyle = {
    fontWeight: 400,
    fontFamily: 'inherit',
    display: 'inline-block',
    padding: '0.1px 5px',
    borderRadius: '10px',
    backgroundColor: '#32855C',
    color: 'white',
    marginTop: '5%', /* Ajusta el margen superior */
  };
  
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white',
    padding: '10px 30px',
    borderRadius: '10px',
    marginTop: '-10%', /* Ajusta el margen superior */
    cursor: 'pointer',
    fontWeight: 100,
    marginLeft: -20
  };

  return (
    <div className="home-background"> {/* Agrega la clase aquí */}
      <div className="content ">
        <h1>
          MCO <span style={appStyle}>APP</span>
        </h1>
        <h2>La siguiente generación de Logbook</h2>
        <Link to="/login">
          <button style={buttonStyle}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
