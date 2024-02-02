import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Projects() {
  const [showHdc, setShowHdc] = useState(false);
  const [showTbems, setShowTbems] = useState(false);
  const [showSaffy, setShowSaffy] = useState(false);
  const [showIbiz, setShowIbiz] = useState(false);
  const [showMemo, setShowMemo] = useState(false);

  const data = [
    {
      id: "hdc",
      name: "건설 현장 모니터링 모바일 웹",
      duration: "23.9~23.12",
      imageUrl: "img/hdcA.png",
      details: [
        "전국 건설 현장 관리용 모니터링 시스템",
        "해당 건설 현장의 CCTV, 현장위치지도, 장비정보, 날씨, 준공예정일, 출역정보, 공정률, 장비상태 등 정보를 모니터링",
        "CCTV를 분할 화면으로 확인 가능하고, PTZ 조정 가능",
        "프론트 : React 18, JavaScript, HTML, CSS",
      ],
    },
    {
      id: "memo",
      name: "개인 메모장 (TOY PROJECT) https://react-with-firebase-39fa2.web.app ",
      duration: "23.6~23.6",
      imageUrl: "img/mydiary2.png",
      details: [
        "리액트&파이어베이스를 이용한 웹 개발 필수 기능 구현",
        "회원가입, 로그인 기능 구현",
        "게시글 작성 및 저장 삭제 기능 구현",
        "기술 스택 : JavaScript, HTML, CSS, FireBase, Window, Github",
      ],
    },
    {
      id: "tbems",
      name: "건물 에너지 관리 시스템 R&D 정부사업",
      duration: "22.2~22.9",
      imageUrl: "img/TBEMS1.png",
      details: [
        "건물 에너지 관리 시스템 웹 페이지",
        "건물 에너지 총 사용량을 불러와 시각화 하고 전월, 전년 평균과 현재 평균 사용량과 비교하여 에너지 사용량 추이를 알 수 있습니다.",
        "단위 구역(사무실, 복도, 등)의 에너지 사용량을 조회 및 전원 버튼 조작을 합니다.",
        "건물에 대한 다양한 정보들을 조회할 수 있습니다.",
        "프론트 : React, JavaScript, HTML, CSS, StyledComponent, Ajax, RestAPI, ApexCharts",
        "백 : Node.js, RedisDB, InfluxDB",
        "환경 : Window, Linux, Github, PostMan",
      ],
    },
    {
      id: "saffy",
      name: "웹 에이전시 프론트 개발 지원_Saffy",
      duration: "22.12~23.1",
      imageUrl: "img/saffy1.png",
      details: [
        "담당 역할 : 로그인 페이지(SNS로그인, 페이지 분기 처리), 마이 페이지(개인정보 수정 및 등록) 구현",
        "프론트 : JavaScript, HTML, SCSS",
        "백 : PHP, JavaScript",
        "환경 : Window, Github, Figma, PostMan",
      ],
    },
    {
      id: "ibiz",
      name: "웹 에이전시 프론트 개발 지원_IbizSoft",
      duration: "22.12~23.1",
      imageUrl: "img/ibizsoft1.png",
      details: [
        "담당 역할 : 대시 보드 페이지(데이터 테이블 표기 및 그래프 표기) 및 권한 설정 페이지(개인 설정 수정 및 개인 정보 등록) 구현",
        "기술 스택 : Window, TypeScript, PHP, SCSS, Github, Figma, PostMan, Recoil ,Ajax",
      ],
    },
  ];

  const modalData = [
    {
      id: "hdc",
      images: ["img/hdcLong.png", "img/hdcLong2.png", "img/hdc3.png"],
      showModal: showHdc,
      setShowModal: setShowHdc,
    },
    {
      id: "tbems",
      images: ["img/TBEMS1.png", "img/TBEMS2.png", "img/TBEMS3.png"],
      showModal: showTbems,
      setShowModal: setShowTbems,
    },
    {
      id: "saffy",
      images: ["img/saffy1.png", "img/saffy2.png"],
      showModal: showSaffy,
      setShowModal: setShowSaffy,
    },
    {
      id: "ibiz",
      images: ["img/ibizsoft1.png", "img/ibizsoft2.png", "img/ibizsoft3.png"],
      showModal: showIbiz,
      setShowModal: setShowIbiz,
    },
    {
      id: "memo",
      images: ["img/mydiary1.png", "img/mydiary2.png"],
      showModal: showMemo,
      setShowModal: setShowMemo,
    },
  ];

  const getSetShowModalFunction = (id) => {
    const modal = modalData.find((m) => m.id === id);
    return modal ? modal.setShowModal : () => {};
  };

  return (
    <div className="Projects">
      <div className="title">
        <h1 className="small">PROJECT</h1>
        <h1 className="big">PROJECT</h1>
      </div>

      <div className="Projects-1">
        {data.map((project, index) => (
          <div key={index}>
            <div className="div1">
              <span>{project.name}</span>
              <span className="second">{project.duration}</span>
            </div>
            <div className="div2">
              <ul>
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <img
                src={project.imageUrl}
                alt=""
                onClick={() => getSetShowModalFunction(project.id)(true)}
              />
            </div>
          </div>
        ))}
      </div>

      {modalData.map(
        (modal) =>
          modal.showModal && (
            <div className="modal" key={modal.id}>
              <button onClick={() => modal.setShowModal(false)}>x</button>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ height: "75vh" }} // Swiper의 높이를 설정합니다.
              >
                {modal.images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "75vh",
                      overflowY: "auto", // 슬라이드 내부 스크롤 설정
                    }}
                  >
                    {/* 감싸는 div 추가 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", // 세로로 길지 않은 이미지 중앙 정렬
                        alignItems: "center",
                        height: "75vh", // div의 높이를 SwiperSlide와 동일하게 설정
                        width: "100%", // div의 너비 설정
                      }}
                    >
                      <img
                        src={image}
                        alt=""
                        style={{
                          maxWidth: "100%",
                          maxHeight: "75vh", // 세로로 긴 이미지의 경우 스크롤바 생성을 위해 설정
                          width: "auto",
                          height: "auto",
                          objectFit: "contain", // 이미지가 비율을 유지하도록 설정
                        }}
                        onClick={() => modal.setShowModal(false)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )
      )}
    </div>
  );
}

export default Projects;
