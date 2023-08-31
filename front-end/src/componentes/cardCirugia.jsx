import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const SmallCardContainer = styled.div`
  width: 465px;
  height: 165px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  position: relative;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #32855C;
  left: 39rem;
  top: -21.3rem;

  &::before {
    content: '';
    display: block;
    width: 95%;
    height: 2px;
    background-color: #B6C3BD;
    position: absolute;
    bottom: 5rem;
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

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownText = styled.h3`
  margin: 0;
  font-size: 14px;
  position: relative;
  top: 1rem;
  left: 1.1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #1E573B;
  }
`;

const DropdownIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  color: #DAD9D9;
  cursor: pointer;
`;

const DropdownOptions = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Option = styled.div`
  padding: 0.3rem 0;
  cursor: pointer;
  font-size: 10px;
  font-weight: 300;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const RedOption = styled(Option)`
  color: red;
  position: relative;
  left: 1rem;
  top: 1.3rem;
  font-size: 12px;
  

`;

const RedOption1 = styled(Option)`
  color: red;
  position: relative; 
  left: 7rem;
  font-size: 12px;
  top: -0.1rem;
  

`;

const RedOption2 = styled(Option)`
  color: red;
  position: relative;
  left: 11.5rem;
  top: -1.6rem;
  font-size: 12px;
`;

const RedOption3 = styled(Option)`
  color: red;
  position: relative;
  right: 13rem;
  top: 4rem;
  font-size: 12px;
`;

const RedOption4= styled(Option)`
  color: red;
  position: relative;
  right: 12rem;
  top: 4rem;
  font-size: 12px;
`;

const Text = styled.h3`
  margin: 0;
  font-size: 14px;
  color: ${props => (props.selected ? '#999' : '#32855C')};
  cursor: pointer;
  position: relative;
  top: 2.5rem;
  right: 9rem;

  &:hover {
    color: #999;
  }
`;

const CardCirugia = ({ title, content }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const selectSpecialty = (specialty) => {
      setSelectedSpecialty(specialty);
      setDropdownOpen(false);
    };
  
    const handleDateClick = (dateType) => {
      setSelectedDate(dateType);
      // Aquí podrías implementar la lógica relacionada con la fecha
    };
  
    return (
      <SmallCardContainer>
        <Tab>Cirugía</Tab>
        <ContentContainer>
          <DropdownContainer>
            <DropdownText>Especialidad</DropdownText>
            <RedOption onClick={() => selectSpecialty('Cardiovascular')}>Cardiovascular</RedOption>
            <RedOption1 onClick={() => selectSpecialty('Obstetrica')}>Obstetrica</RedOption1>
            <RedOption2 onClick={() => toggleDropdown()}>
              Traumatología y Ortopedía
              <DropdownIcon icon={faCircleChevronDown} />
              <DropdownOptions isOpen={dropdownOpen}>
                <Option onClick={() => selectSpecialty('Ginecologia')}>Ginecología</Option>
                <Option onClick={() => selectSpecialty('Cirugia general')}>Cirugía general</Option>
                <Option onClick={() => selectSpecialty('Torax')}>Torax</Option>
                <Option onClick={() => selectSpecialty('Neurocirugia')}>Neurocirugía</Option>
                <Option onClick={() => selectSpecialty('Transplante')}>Transplante</Option>
                <Option onClick={() => selectSpecialty('Otro')}>Otro</Option>
              </DropdownOptions>
            </RedOption2>
          </DropdownContainer>
          <Text onClick={() => handleDateClick('hoy')}>Prioridad</Text>
          <RedOption3 onClick={() => selectSpecialty('Cardiovascular')}>Electiva o programada</RedOption3>
          <RedOption4 onClick={() => selectSpecialty('Cardiovascular')}>Urgencia</RedOption4>
        </ContentContainer>
      </SmallCardContainer>
    );
  };
  
  CardCirugia.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };
  
  export default CardCirugia;

  
  
  
  
  