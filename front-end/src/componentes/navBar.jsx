import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  background-color: #FFFFFF;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const NavbarLinks = styled.ul`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #32855C;
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled.li`
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 70%;
    height: 2px;
    background-color: #11263C;
  }

  &:hover {
    color: #999;
  }
`;

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10rem;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  position: relative;
  left: 5rem;
  color: black;
`;

const ProfileDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const ChangePhotoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #32855C;
 
`;

const Navbar = ({ userPhoto }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLink isActive={location.pathname === '/registro'}>Registro</NavbarLink>
        <NavbarLink isActive={location.pathname === '/casos'}>Casos</NavbarLink>
        <NavbarLink isActive={location.pathname === '/reportes'}>Reportes</NavbarLink>
      </NavbarLinks>
      <NavbarProfile onClick={handleProfileClick}>
      <span style={{ color: 'black', fontFamily: 'Raleway, sans-serif' }}>Usuario</span>
        <ArrowIcon icon={faAngleDown} />
        <ProfileImage src={userPhoto} alt="Profile" />
        <ProfileDropdown isOpen={isDropdownOpen}>
          <ChangePhotoButton>Cambiar Foto de Perfil</ChangePhotoButton>
        </ProfileDropdown>
      </NavbarProfile>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  userPhoto: PropTypes.string.isRequired,
};

export default Navbar;