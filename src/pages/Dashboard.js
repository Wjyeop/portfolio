function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-1">
        <h1 className="ani">
          Hi, I'M FRONTEND DEVELOPER
          <br />
        </h1>

        <p className="p1">안녕하세요 원준엽입니다</p>
        <p className="p2">저는 2년차 프론트엔드 개발자입니다.</p>
        <p className="p3">React를 주력으로 하며</p>
        <p> Vue, TypeScript, Next 등</p>
        <p>여러가지를 공부하고 있습니다.</p>
        <img src="img/profile.jpg" alt="" />
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
            29, 1996.10
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
      <div className="dashboard-4">
        <ul>
          <li>- React, TypeScript 개발</li>
          <li>- JavaScript ES6, HTML5, CSS3, 웹 접근성과 표준 개발</li>
          <li>- HTTP, Rest API, CS 컴퓨터전공 및 기본 지식 보유</li>
          <li>- 상태관리툴개발 : Redux-toolkit, Recoil, Context API</li>
          <li>- 반응형 웹 제작</li>
        </ul>
      </div>
      <div className="dashboard-3">
        <p>
          * 웹 SI / Agency 경험으로 웹 개발 프로젝트를 진행하면서
          프론트엔드로서의 동료들과 커뮤니케이션 방법을 키워왔습니다.
          <br />
          * PostMan, Figma, Swagger 등을 활용한 다양한 개발 환경을 접했습니다.
          <br />* 부족한 부분은 개인 프로젝트를 진행하고, 인강을 들으며 부족한
          점을 채워나가기 위해 노력하고 있습니다.
          <br />
        </p>
        <p>최종 수정일 : 24년 02월</p>
      </div>
    </div>
  );
}

export default Dashboard;
