import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin 1rem;
  display: flex;
  flex-direction: column;

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
  align-items: center;javat
  margin-left: 4rem;

`;

const ProfileText = styled.p`
  font-size: 1rem;
`;

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <Title>Profile</Title>
      <ProfileContent>
        <ProfileImage src={process.env.PUBLIC_URL + '/logo192.png'} alt="프로필 사진" />
        <ProfileText>
            안녕하세요 👋<br/>
            저는 웹 개발자이며 주로 프론트엔드 기술을 다루고 있습니다.<br/>
            개발 기술을 차곡차곡 쌓아보겠습니다.<br/><br/>
            
            웹 SI 업체와 에이전시 인턴 경험으로 웹 개발 프로젝트를 진행하면서 프론트 엔드로서의 동료들과 커뮤니케이션 방법을 키워왔고, PostMan, Figma, Swagger, 기타 등등을 활용한 다양한 개발 환경을 접했습니다.<br/>
            부족한 부분은 개인 프로젝트를 진행하고, 인강을 들으며 부족한 점을 채워나가기 위해 노력했습니다.      
        </ProfileText>
      </ProfileContent>
    </ProfileContainer>
  );
}

export default Profile;
