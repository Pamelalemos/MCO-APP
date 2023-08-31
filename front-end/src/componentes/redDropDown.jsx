import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownText = styled.h3`
  margin: 0;
  font-size: 14px;
  position: relative;
  top: 3rem;
  left: 1.1rem;

  &:hover {
    color: #1E573B;
  }
`;

const DropdownOptions = styled.div`
  position: relative;
  top: -1rem;
  left: 0rem;
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
  font-size: 12px;
  font-weight: 300;
  top: 5rem;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const RedOption = styled(Option)`
  color: red;
  position: relative;
  top: 3rem;
  left: 1rem;
`;

const DropdownIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  color: #DAD9D9;
  cursor: pointer;
`;

const RedDropdown = ({ title, options, isOpen, toggleDropdown, onSelect }) => {
  return (
    <DropdownContainer>
      <DropdownText>{title}</DropdownText>
      <RedOption onClick={toggleDropdown}>
        {options[0]}
        <DropdownIcon icon={faCircleChevronDown} />
        <DropdownOptions isOpen={isOpen}>
          {options.slice(1).map((option, index) => (
            <Option key={index} onClick={() => onSelect(option)}>
              {option}
            </Option>
          ))}
        </DropdownOptions>
      </RedOption>
    </DropdownContainer>
  );
};

RedDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RedDropdown;
