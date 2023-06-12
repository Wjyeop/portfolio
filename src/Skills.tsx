import React from 'react';
import styled, {css} from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Title>Skills</Title>
      <SkillsContent>
        <JavaScript>
          <JavaScriptImg src={process.env.PUBLIC_URL + 'img/javascript.svg'} alt="자바스크립트" />
          <JavaScriptText>JavaScript</JavaScriptText>
        </JavaScript>
        <TypeScript>
          <TypeScriptImg src={process.env.PUBLIC_URL + 'img/typescript.svg'} alt="타입스크립트" />
          <TypeScriptText>TypeScript</TypeScriptText>
        </TypeScript>
        <Html5>
          <Html5Img src={process.env.PUBLIC_URL + 'img/html5.svg'} alt="프로필 사진" />
          <Html5Text>Html</Html5Text>
        </Html5>
        <StyledComponents>
          <StyledComponentsImg src={process.env.PUBLIC_URL + 'img/styledcomponents.svg'} alt="프로필 사진" />
          <StyledComponentsText>StyledComponents</StyledComponentsText>
        </StyledComponents>
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

  @media (min-width:1000px) {
    width:50%
   }
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
 
 @media (min-width:300px) {
  width:5%;
 }
 
`
const JavaScriptText = styled.p`
  color:white;
  display:inline;
  font-weight: bold;
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

 @media (min-width:300px) {
  width:5%;
 }

 
`
const TypeScriptText = styled.p`
  color:white;
  display:inline;
  font-weight: bold;
`

const Html5 = styled.div`
  ${Skill};
  background-color: #E34F26;
  align-items: center;  
  display: flex;
`
const Html5Img = styled.img`
 width:10%;
 margin: 1rem;

 @media (min-width:300px) {
  width:5%;
 }
`
const Html5Text = styled.p`
  color:white;
  display:inline;
  font-weight: bold;
`

const StyledComponents = styled.div`
  ${Skill};
  background-color: #DB7093;
  align-items: center;  
  display: flex;
`
const StyledComponentsImg = styled.img`
 width:10%;
 margin: 1rem;

 @media (min-width:300px) {
  width:5%;
 }
`
const StyledComponentsText = styled.p`
  color:white;
  display:inline;
  font-weight: bold;
`

export default Skills;
