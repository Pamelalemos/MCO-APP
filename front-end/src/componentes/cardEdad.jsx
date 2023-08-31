import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
  width: 437px;
  height: 165px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  position: relative;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #32855C;
  top: -10rem;
  left: 10rem;

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

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Text = styled.h3`
  margin: 0;
  font-size: 16px;
  color: ${props => (props.selected ? '#999' : '#32855C')};
  cursor: pointer;
  margin-left: 2rem;
  margin-right: 2rem;

  &:hover {
    color: #999;
  }
`;

const SmallText = styled.span`
  font-size: 10px;
  display: flex;
  flex.direction: column;
`;

const CardEdad = ({ title, content }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateClick = (dateType) => {
    setSelectedDate(null);
    setSelectedOption(dateType);
    setShowDatePicker(true);
  };

  return (
    <SmallCardContainer>
      <Tab>Edad</Tab>
      <ContentContainer>
        <Text
          onClick={() => handleDateClick('Adulto')}
          selected={selectedOption === 'Adulto'}
        >
          Adulto
        </Text>
        <Text
          onClick={() => handleDateClick('Pediatrico')}
          selected={selectedOption === 'Pediatrico'}
        >
          Pediatrico
          <SmallText>(menor a 12 años)</SmallText>
        </Text>
        <Text
          onClick={() => handleDateClick('Neonato')}
          selected={selectedOption === 'Neonato'}
        >
          Neonato
          <SmallText>(menor a 30 días)</SmallText>
        </Text>
      </ContentContainer>
    </SmallCardContainer>
  );
};

CardEdad.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardEdad;
