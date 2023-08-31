import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputContainer = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  padding: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-left: -10%;
  font-family: 'Raleway'
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputElement = styled.input`
  width: 130%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: -10%;
`;

const PasswordInput = styled.input`
  width: 130%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: -10%;
  font-family: 'Raleway'
`;

const PasswordToggle = styled.span`
  position: absolute;
  top: 50%;
  right: -20%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #32855C;
`;

const Input = ({ label, type, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      {type === 'password' ? (
        <InputWrapper>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            id={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          <PasswordToggle onClick={handleTogglePassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </PasswordToggle>
        </InputWrapper>
      ) : (
        <InputElement
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
