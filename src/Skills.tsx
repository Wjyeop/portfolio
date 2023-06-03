import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      {/* 내용을 추가하세요 */}
    </SkillsContainer>
  );
}

export default Skills;
