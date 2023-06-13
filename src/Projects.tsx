import React, { useEffect } from 'react';
import styled, {css} from 'styled-components';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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

  useEffect(() => {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      // slidesPerView: 1,
      spaceBetween: 1000,
      autoHeight: true,
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay:1000,
        disableOnInteraction: true
      }
    });
  }, []);

  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      <ProjectsContent>
        <Project1>     
          <div className="swiper-container">  
            <div className="swiper-wrapper">
              {/* 스와이퍼 슬라이드 아이템 */}
              <div className="swiper-slide">
                <img src={process.env.PUBLIC_URL + 'img/TBEMS1.png'} alt="tbems1이미지"/>
              </div>
              <div className="swiper-slide">
               <img src={process.env.PUBLIC_URL + 'img/TBEMS2.png'} alt="tbems2이미지"/>
              </div>
              <div className="swiper-slide">
                <img src={process.env.PUBLIC_URL + 'img/TBEMS3.png'} alt="tbems3이미지"/>
              </div>
            </div>
          </div>
          <Project1Img src={process.env.PUBLIC_URL + 'img/TBEMS1.png'} alt="프로젝트1" />
          <Project1Text></Project1Text>
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
  margin-left: 5rem;
`;

const Project1 = styled.div`
  ${Project};  
`;

const Project1Img = styled.img`
  width:50%
  margin: 1rem;
`;

const Project1Text = styled.p`

`;

export default Projects;
