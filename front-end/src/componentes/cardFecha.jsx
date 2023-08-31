import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  top: 1rem;
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
  align-items: center;
  margin-top: 1rem;
`;

const CalendarIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  color: #32855C;
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const DateText = styled.h3`
  margin: 0;
  font-size: 16px;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 1rem;
  margin-top: 1rem;
`;

const DateText2 = styled.h3`
  margin: 0;
  font-size: 16px;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;


const CardFecha = ({ title, content }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateClick = (dateType) => {
    setSelectedDate(null);
    setShowDatePicker(true);
  };

  return (
    <SmallCardContainer>
      <Tab>Fecha</Tab>
      <ContentContainer>
        <CalendarIcon
          icon={faCalendarAlt}
          onClick={() => setShowDatePicker(!showDatePicker)}
        />
        <DateText onClick={() => handleDateClick('hoy')}>Hoy</DateText>
        <DateText2 onClick={() => handleDateClick('ayer')}>Ayer</DateText2>
      </ContentContainer>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          showYearDropdown
          scrollableYearDropdown
        />
      )}
    </SmallCardContainer>
  );
};

CardFecha.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardFecha;