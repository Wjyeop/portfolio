import React from 'react';
import styled, {css} from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      <SkillsContent>
        <JavaScript>
          <JavaScriptImg src={process.env.PUBLIC_URL + '/javascript.svg'} alt="프로필 사진" />
          <JavaScriptText>JavaScript</JavaScriptText>
        </JavaScript>
        <TypeScript>
          <TypeScriptImg src={process.env.PUBLIC_URL + '/typescript.svg'} alt="프로필 사진" />
          <TypeScriptText>TypeScript</TypeScriptText>
        </TypeScript>
        <JavaScript>
          <JavaScriptImg src={process.env.PUBLIC_URL + '/javascript.svg'} alt="프로필 사진" />
          <JavaScriptText>JavaScript</JavaScriptText>
        </JavaScript>
      </SkillsContent>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const SkillsContent = styled.div`
  flex-wrap: wrap;
  margin-left: 5rem;
`;

const Skill = css`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const JavaScript = styled.div`
  ${Skill};
  background-color: #F7DF1E;
  align-items: center;  
  display: flex;
`
const JavaScriptImg = styled.img`
 width:10%;
 margin: 1rem;
`
const JavaScriptText = styled.p`
  color:white;
  display:inline;
`
const TypeScript = styled.div`
  ${Skill};
  background-color: #3178C6;
  align-items: center;  
  display: flex;
`
const TypeScriptImg = styled.img`
 width:10%;
 margin: 1rem;
`
const TypeScriptText = styled.p`
  color:white;
  display:inline;
`

export default Skills;
