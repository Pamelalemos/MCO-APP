import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const SmallCardContainer = styled.div`
  width: 465px;
  height: 365px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  position: relative;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #32855C;
  left: 39rem;
  top: -44rem;

  &::before {
    content: '';
    display: block;
    width: 95%;
    height: 2px;
    background-color: #B6C3BD;
    position: absolute;
    bottom: 18rem;
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
  flex-direction: column;
`;

const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownText = styled.h3`
  margin: 0;
  font-size: 14px;
  position: relative;
  top: 2rem;
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
  top: 2rem;
  font-size: 12px;
`;

const RedOption1 = styled(Option)`
  color: red;
  position: relative;
  left: 6.5rem;
  font-size: 12px;
  top: 0.5rem;
`;

const RedOption2 = styled(Option)`
  color: red;
  position: relative;
  left: 14.7rem;
  top: -1rem;
  font-size: 12px;
`;

const NotesSection = styled.textarea`
  width: 409px;
  height: 227px;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 1.3rem;
`;

const CardDetalle = ({ title, content }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [notes, setNotes] = useState('');

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

    const handleNotesChange = (event) => {
      setNotes(event.target.value);
    };

    return (
      <SmallCardContainer>
        <Tab>Detalles</Tab>
        <ContentContainer>
          <DropdownContainer>
            <DropdownText>Incidentes</DropdownText>
            <RedOption onClick={() => selectSpecialty('Cardiovascular')}>Paro Cardiaco</RedOption>
            <RedOption1 onClick={() => selectSpecialty('Obstetrica')}>Intubacion esofágica</RedOption1>
            <RedOption2 onClick={() => toggleDropdown()}>
              Sangrado masivo
              <DropdownIcon icon={faCircleChevronDown} />
              <DropdownOptions isOpen={dropdownOpen}>
                <Option onClick={() => selectSpecialty('Ginecologia')}>Ginecologia</Option>
                <Option onClick={() => selectSpecialty('Cirugia general')}>Cirugia general</Option>
                <Option onClick={() => selectSpecialty('Torax')}>Torax</Option>
                <Option onClick={() => selectSpecialty('Neurocirugia')}>Neurocirugia</Option>
                <Option onClick={() => selectSpecialty('Transplante')}>Transplante</Option>
                <Option onClick={() => selectSpecialty('Otro')}>Otro</Option>
              </DropdownOptions>
            </RedOption2>
          </DropdownContainer>
          <NotesSection
            placeholder="Notas"
            value={notes}
            onChange={handleNotesChange}
          />
        </ContentContainer>
      </SmallCardContainer>
    );
  };
  
  CardDetalle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };
  
  export default CardDetalle;
