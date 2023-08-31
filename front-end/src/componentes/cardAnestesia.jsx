import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RedDropdown from './redDropDown';

const SmallCardContainer = styled.div`
  width: 410px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  position: relative;
  color: #32855C;
  top: -20rem;
  left: 10rem;
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  top: -2rem;
`;

const titles = [
    'Tipo de Anestesia',
    'Via Áerea',
    'Procedimientos',
    'Accesos y monitoreo',
    'Anestesia neuroaxial',
    'Anestesia Regional con Ultrasonido'
  ];

const CardAnestesia = ({ title, content }) => {
  // Create an array of boolean values to track the state of each dropdown
  const [dropdownStates, setDropdownStates] = useState(Array(titles.length).fill(false));
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const selectSpecialty = (specialty) => {
    setSelectedSpecialty(specialty);
    setDropdownStates(Array(titles.length).fill(false)); // Close all dropdowns when a selection is made
  };

  const handleDateClick = (dateType) => {
    setSelectedDate(dateType);
    // Implement date-related logic here
  };

  return (
    <SmallCardContainer>
      <Tab>Anestesia</Tab>
      <ContentContainer>
        {titles.map((title, index) => (
          <DropdownContainer key={index}>
            <RedDropdown
              title={title}
              options={[
                'Tubo orotraqueal',
                'Dispositivo supraglótico',
                'Mascara Facial',
                'Ginecologia',
                'Cirugia general',
                'Torax',
                'Neurocirugia',
                'Transplante',
                'Otro'
              ]}
              isOpen={dropdownStates[index]}
              toggleDropdown={() => toggleDropdown(index)}
              onSelect={selectSpecialty}
            />
          </DropdownContainer>
        ))}
      </ContentContainer>
    </SmallCardContainer>
  );
};

CardAnestesia.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardAnestesia;
