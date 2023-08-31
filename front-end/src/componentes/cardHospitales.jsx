import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons'; 

const SmallCardContainer = styled.div`
  width: 437px;
  height: 135px;
  border: 1px solid #B6C3BD;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  position: relative;
  padding: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #32855C;
  top: -10.4rem;
  left: 15rem;

  &::before {
    content: '';
    display: block;
    width: 95%;
    height: 2px;
    background-color: #B6C3BD;
    position: absolute;
    bottom: 6.5rem; /* Ajusta la distancia desde abajo */
    left: 0.8rem;
  }
`;

const Tab = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #B6C3BD;
  color: #1E573B;
  padding: 0.2rem 1.5rem;
  border-radius: 3px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #32855C;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 15rem;
  margin-top: -7.5rem;
  color: #DAD9D9;
  font-size: 20px;

`;

const HospitalIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  font-weight: 300;     
`;

const HospitalsList = styled.ul`
  max-height: 100px;
  overflow: auto;
  padding: 0;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: red;
  position: absolute;
  bottom: 0; /* Alinea la lista en la parte inferior de la card */
  left: 0; /* Alinea la lista en la parte izquierda de la card */
  right: 0; /* Ancho máximo de la lista igual al ancho de la card */
`;


const HospitalItem = styled.li`
  list-style: none;
  font-weight: 300;
`;

const hospitals = [
 "BAHIA BLANCA - H. I. G. A 'DR. JOSE PENNA'",
 "CHACO (RESISTENCIA) - HOSPITAL DR. JULIO C. PERRANDO",
 "CHACO (SAENZ PEÑA) - HOSPITAL 4 DE JUNIO - RAMON CARRILLO",
 "CORRIENTES - HOSPITAL ESCUELA 'GENERAL JOSE FRANCISCO DE SAN MARTIN'",
 "CORRIENTES - HOSPITAL JUAN RAMON VIDAL",
 "ENTRE RIOS - HOSPITAL GENERAL SAN MARTIN",
 "ENTRE RIOS - SANATORIO ADVENTISTA DEL PLATA",
 "FORMOSA - HOSPITAL CENTRAL DE FORMOSA",
 "H. G. A. 'BERNARDINO RIVADAVIA'",
 "H. G. A. 'DALMACIO VELEZ SARSFIELD'",
 "H. G. A. 'DONACION F. SANTOJANNI'",
 "H. G. A. 'DR. CARLOS G. DURAND",
 "H. G. A. 'DR. COSME ARGERICH'",
 "H. G. A. 'DR. ENRIQUE TORNU'",
 "H. G. A. 'DR. IGNACIO PIROVANO'",
 "H. G. A. 'DR. J. M. RAMOS MEJIA'",
 "H. G. A. 'DR. JOSE MARIA PENNA'",
 "H. G. A. 'DR. JUAN A. FERNANDEZ'",
 "H. G. A. 'DR. TEODORO ALVAREZ'",
 "H. G. A. 'PARMENIO T. PIÑERO'",
 "H. I. G. A 'DR. DIEGO PAROISSIEN'",
 "H. I. G. A 'EVA PERON'",
 "H. I. G. A 'EVITA'",
 "H. I. G. A 'LUISA C. DE GANDULFO'",
 "H. I. G. A 'PEDRO FIORITO'",
 "H. I. G. A 'PRESIDENTE PERON'",
 "H. I. G. A 'PROFESOR DR. LUIS GUEMES'",
 "H. I. G. A 'VICENTE LOPEZ Y PLANES'",
 "H. Z. G. A 'DR. ALBERTO ANTRANIK EURNEKIAN'",
 "H. Z. G. A 'DR. ARTURO OÑATIVIA'",
 "H. Z. G. A 'DR. CARLOS A. BOCALANDRO'",
 "H. Z. G. A 'DR. ENRIQUE ERILL'",
 "H. Z. G. A 'DR. ISIDORO G. IRIARTE'",
 "H. Z. G. A 'GRAL. MANUEL BELGRANO'",
 "H. Z. G. A 'MAGDALENA VILLEGAS DE MARTINEZ'",
 "H. Z. G. A 'MARIANO Y LUCIANO DE LA VEGA'",
 "H. Z. G. A 'PETRONA V. DE CORDERO'",
 "H. Z. G. A 'SIMPLEMENTE EVITA - KM 32'",
 "H. Z. G. A 'EVITA PUEBLO DE BERAZATEGUI'",
 "H.Z.G.A 'HEROES DE MALVINAS'",
 "HOSPITAL ALTA COMPLEJIDAD EN RED EL CRUCE 'DR. NESTOR CARLOS KIRCHNER'",
 "HOSPITAL DE CLINICAS 'JOSE DE SAN MARTIN'",
 "HOSPITAL ITALIANO DE BUENOS AIRES",
 "HOSPITAL MILITAR CENTRAL CIRUJANO MAYOR DR. COSME ARGERICH",
 "HOSPITAL NACIONAL 'PROF. DR. ALEJANDRO POSADAS'",
 "HOSPITAL NACIONAL DE PEDIATRIA 'PROF. DR. JUAN P. GARRAHAN'",
 "HOSPITAL NAVAL CIRUJANO MAYOR 'DR. PEDRO MALLO'",
 "HOSPITAL UNIVERSITARIO AUSTRAL",
 "HOSPITAL UNIVERSITARIO CEMIC",
 "JUJUY - HOSPITAL PABLO SORIA",
 "JUNIN - H. I. G. A.  ABRAHAM PIÑEYRO",
 "LA RIOJA - HOSPITAL REGIONAL 'DR. ENRIQUE VERA BARROS'",
 "MENDOZA - HOSPITAL CENTRAL DE MENDOZA",
 "MENDOZA - HOSPITAL DR. HUMBERTO NOTTI",
 "MENDOZA - HOSPITAL LUIS LAGOMAGGIORE",
 "NEUQUEN - HOSPITAL CASTRO RENDON",
 "RIO NEGRO - HOSPITAL 'DR. PEDRO MOGUILLANSKY'",
 "SALTA - HOSPITAL SAN BERNARDO",
 "SAN NICOLAS - H. I. G. A SAN FELIPE",
 "SANATORIO GUEMES",
 "SANTA CRUZ - HOSPITAL REGIONAL DE RIO GALLEGOS",
 "SANTA FE - HOSPITAL J. B. ITURRASPE",
 "SANTIAGO DEL ESTERO - HOSPITAL REGIONAL 'DR. RAMON CARRILLO'",
 "TANDIL - HOSPITAL RAMON SANTAMARINA",
 "TUCUMAN - HOSPITAL CENTRO DE SALUD 'DR. ZENON SANTILLAN'",
];

const CardHospitales = () => {
    const [showHospitals, setShowHospitals] = useState(false);
  
    return (
      <SmallCardContainer>
        <Tab>Hospital</Tab>
        <h3>
          <HospitalIcon icon={faHospital} /> Hospital Asignado{' '}
          <ToggleButton onClick={() => setShowHospitals(!showHospitals)}>
            <ArrowIcon icon={faCircleChevronDown} />
          </ToggleButton>
        </h3>
        {showHospitals && (
          <HospitalsList>
            {hospitals.map((hospital, index) => (
              <HospitalItem key={index}>{hospital}</HospitalItem>
            ))}
          </HospitalsList>
        )}
      </SmallCardContainer>
    );
  };
  
  export default CardHospitales;