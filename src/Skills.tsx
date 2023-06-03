import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-left: 1rem;
`

const SkillsContent = styled.div`
  flex-wrap: wrap;
  margin-left: 5rem;
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      <SkillsContent>
        <span>주요 기술 : </span>
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=white"/>
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=TypeScript&logoColor=white"/>
                <img src="https://img.shields.io/badge/HTML-E34F26?style=plastic&logo=HTML&logoColor=white"/>
                <img src="https://img.shields.io/badge/CSS-1572B6?style=plastic&logo=CSS&logoColor=white"/>
                <img src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=white"/>
                <img src="https://img.shields.io/badge/Recoil-61DAFB?style=plastic&logo=Recoil&logoColor=white"/><br/><br/>

        <span>환경 : </span>
                <img src="https://img.shields.io/badge/Github-181717?style=plastic&logo=Github&logoColor=white"/>
                <img src="https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=Postman&logoColor=white"/>
                <img src="https://img.shields.io/badge/Swagger-85EA2D?style=plastic&logo=Swagger&logoColor=white"/>
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=plastic&logo=Figma&logoColor=white"/>    
      </SkillsContent>
    </SkillsContainer>
  );
}

export default Skills;
