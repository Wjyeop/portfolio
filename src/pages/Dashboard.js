function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-1">
        <h1 className="ani">
          Hi, I'M FRONTEND DEVELOPER
          <br />
        </h1>

        <p className="p1">안녕하세요 원준엽입니다</p>
        <p className="p2">저는 3년차 프론트엔드 개발자입니다.</p>
        <p className="p3">React를 주력으로 하며</p>
        <p> Vue, TypeScript, Next 등</p>
        <p>여러가지를 공부하고 있습니다.</p>
        <img src="img/profile.jpg" alt="프로필" />
      </div>
      <div className="dashboard-2">
        <h2>PERSONAL INFOS</h2>
        <ul>
          <li>
            <span>NAME : </span>
            원준엽
          </li>
          <li>
            <span>AGE : </span>
            30, 1996.10
          </li>
          <li>
            <span>PHONE : </span>
            010.2482.1996
          </li>
          <li>
            <span>ADDRESS : </span>
            서울시 강서구
          </li>
          <li>
            <span>EMAIL : </span>
            gpgp08@naver.com
          </li>
        </ul>
      </div>
      <div className="dashboard-3">
        <h2>KEY SKILLS</h2>
        <ul>
          <li>- React 및 TypeScript 기반의 웹 애플리케이션 개발</li>
          <li>- JavaScript(ES6+), HTML5, CSS3를 활용한 시맨틱 마크업 및 웹 표준/웹 접근성 준수 개발</li>
          <li>- HTTP 통신 및 RESTful API 연동 경험, 컴퓨터 과학 전공 지식 기반의 문제 해결 능력</li>
          <li>- Redux-toolkit, Recoil, Context API 등 다양한 상태 관리 라이브러리 활용</li>
          <li>- 다양한 디바이스에 최적화된 반응형 웹 디자인 및 개발</li>
        </ul>
      </div>
      <div className="dashboard-4">
        <h2>EXPERIENCE & GROWTH</h2>
        <p>
          * 웹 SI / Agency 경험으로 웹 개발 프로젝트를 진행하면서
          프론트엔드로서의 원활한 커뮤니케이션을 통해 성공적으로 프로젝트를 수행했습니다
          <br />
          * PostMan, Figma, Swagger 등을 활용한 다양한 개발 환경을 접했습니다.
          <br />* 부족한 부분은 개인 프로젝트를 진행하고, 인강을 들으며 부족한
          점을 채워나가기 위해 노력하고 있습니다.
          <br />
        </p>
        <p>최종 수정일 : 25년 05월</p>
      </div>
    </div>
  );
}

export default Dashboard;
