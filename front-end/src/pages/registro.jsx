import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardHospitales from '../componentes/cardHospitales';
import CardFecha from '../componentes/cardFecha';
import CardEdad from '../componentes/cardEdad';
import CardCirugia from '../componentes/cardCirugia';
import CardAnestesia from '../componentes/cardAnestesia';
import CardDetalles from '../componentes/cardDetalles';
import '../styles/registro.css';

const Registro = () => {
  useEffect(() => {
    // Agrega una clase al body para habilitar el desplazamiento
    document.body.classList.add('scrollable-body');

    // Limpia la clase al desmontar el componente
    return () => {
      document.body.classList.remove('scrollable-body');
    };
  }, []);

  const [savedData, setSavedData] = useState(null);

  const handleSave = () => {
    // Aquí puedes implementar la lógica para guardar la información
    // de las cards en alguna base de datos o almacenamiento
    // Por ahora, solo almacenaremos los datos en el estado para demostración
    const savedInfo = {
      fecha: "Fecha de la cirugía",
      hospital: "Nombre del hospital",
      edad: "Edad del paciente",
      cirugia: "Tipo de cirugía",
      anestesia: "Tipo de anestesia",
      detalles: "Detalles de la cirugía",
    };
    setSavedData(savedInfo);
  };

  return (
    <div className="registro-container">
      <CardFecha />
      <CardHospitales />
      <CardEdad />
      <CardCirugia />
      <CardAnestesia />
      <CardDetalles />

      {/* Utiliza Link para redirigir al usuario a la página de "Casos" */}
      <Link to="/casos" className="save-link">
        Guardar
      </Link>

      {savedData && (
        <div className="saved-info">
          <h2>Información Guardada:</h2>
          <pre>{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Registro;
