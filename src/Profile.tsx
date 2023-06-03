import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ProfileContent = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileText = styled.p`
  font-size: 1rem;
`;

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <Title>Profile</Title>
      <ProfileContent>
        <ProfileImage src="your-profile-image.jpg" alt="프로필 사진" />
        <ProfileText>
            ### 안녕하세요 👋<br/>
            저는 웹 개발자이며 주로 프론트엔드 기술을 다루고 있습니다.<br/>
            개발 기술을 차곡차곡 쌓아보겠습니다.<br/>

            주요 기술 :
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=JavaScript&logoColor=white"/>
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=TypeScript&logoColor=white"/>
            <img src="https://img.shields.io/badge/HTML-E34F26?style=plastic&logo=HTML&logoColor=white"/>
            <img src="https://img.shields.io/badge/CSS-1572B6?style=plastic&logo=CSS&logoColor=white"/>
            <img src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=white"/>
            <img src="https://img.shields.io/badge/Recoil-61DAFB?style=plastic&logo=Recoil&logoColor=white"/><br/>

            환경 :
            <img src="https://img.shields.io/badge/Github-181717?style=plastic&logo=Github&logoColor=white"/>
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=Postman&logoColor=white"/>
            <img src="https://img.shields.io/badge/Swagger-85EA2D?style=plastic&logo=Swagger&logoColor=white"/>
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=plastic&logo=Figma&logoColor=white"/>          
        </ProfileText>
      </ProfileContent>
    </ProfileContainer>
  );
}

export default Profile;
