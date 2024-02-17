import React from "react";

export default function Projects() {
  return (
    <div className="projects">
      <div className="title">
        <h1 className="small">PROJECT</h1>
        <h1 className="big">PROJECT</h1>
      </div>
      <div className="projects-1">
        {data.map((item, index) => (
          <div key={index}>
            <div className="con-title">{item.name}</div>
            <div className="con-wrap">
              <div className="imgwrap">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="textwrap">
                {item.details.map((detail, index) => (
                  <p key={index}>
                    <span>{detail}</span>
                  </p>
                ))}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    링크이동
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
      "스택 : React 18, JavaScript, HTML, CSS",
    ],
  },
  {
    id: "memo",
    name: "개인 메모장 (TOY PROJECT)",
    duration: "23.6~23.6",
    imageUrl: "img/mydiary2.png",
    details: [
      "리액트&파이어베이스를 이용한 웹 개발 필수 기능 구현",
      "회원가입, 로그인 기능 구현",
      "게시글 작성 및 저장 삭제 기능 구현",
      "스택 : JavaScript, HTML, CSS, FireBase, Window, Github",
    ],
    link: "https://react-with-firebase-39fa2.web.app",
  },
  {
    id: "tbems",
    name: "건물 에너지 관리 시스템 R&D 정부사업",
    duration: "22.2~22.9",
    imageUrl: "img/TBEMS1.png",
    details: [
      "건물 에너지 관리 시스템 웹 페이지",
      "건물 에너지 총 사용량을 불러와 시각화 하고 전월, 전년 평균과 현재 평균 사용량과 비교하여 에너지 사용량 추이를 알 수 있습니다.",
      // "단위 구역(사무실, 복도, 등)의 에너지 사용량을 조회 및 전원 버튼 조작을 합니다.",
      // "건물에 대한 다양한 정보들을 조회할 수 있습니다.",
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
      "프론트 : React, JavaScript, HTML, SCSS",
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
      "기술 스택 : React, Window, TypeScript, PHP, SCSS, Github, Figma, PostMan, Recoil ,Ajax",
    ],
  },
];
