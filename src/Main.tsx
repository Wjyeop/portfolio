import React from 'react';
import Topbar from './Topbar';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import styled from 'styled-components';
import './responsive.css'; // 반응형 CSS 파일 import

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <MainContainer>
      <Topbar />
      <Profile />
      <Skills />
      <Projects />
    </MainContainer>
  );
}

export default Main;
