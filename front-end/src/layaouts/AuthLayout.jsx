import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './AuthLayout.css'; // Importa los estilos específicos del layout

const AuthLayout = ({ children }) => {
  return <div className="auth-layout">{children}</div>;
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea un nodo
};

export default AuthLayout;
