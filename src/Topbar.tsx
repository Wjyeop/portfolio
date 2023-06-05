import React from 'react';
import styled from 'styled-components';

const TopbarContainer = styled.div`
  width: 90%;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin: 1rem;
  display: flex; 
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-right: 2rem;
  margin-left: 1rem;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;  
`;

const MenuItem = styled.li`
  margin-right: 1rem;   
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bold;
  }
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <Title>Portfolio</Title>
      <Menu>
        <MenuItem>
          <Link href="#profile">Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#skills">Skills</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#projects">Projects</Link>
        </MenuItem>
      </Menu>
    </TopbarContainer>
  );
}

export default Topbar;
