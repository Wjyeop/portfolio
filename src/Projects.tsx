import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      {/* 내용을 추가하세요 */}
    </ProjectsContainer>
  );
}

export default Projects;
