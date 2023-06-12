import React from 'react';
import styled, {css} from 'styled-components';

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
      <ProjectsContent>
        <Project1>        
          <Project1Img src={process.env.PUBLIC_URL + '/logo192.png'} alt="프로젝트1" />
        </Project1>
      </ProjectsContent>
    </ProjectsContainer>
  );
}

const Project = css`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (min-width:1000px) {
   }
`;

const ProjectsContent = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex-direction: column;
`;

const Project1 = styled.div`
  ${Project};  
`;

const Project1Img = styled.img`
  width:50%
  margin: 1rem;
`;

export default Projects;
