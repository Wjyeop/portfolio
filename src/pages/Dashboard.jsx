import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const strengths = [
  "React와 TypeScript 기반 웹 애플리케이션 개발",
  "시맨틱 마크업과 웹 표준·접근성을 고려한 UI 구현",
  "HTTP 통신과 RESTful API 연동, 컴퓨터공학 지식을 바탕으로 한 문제 해결",
  "Redux Toolkit, Recoil, Context API를 활용한 상태 관리",
  "다양한 화면 크기에 대응하는 반응형 웹 개발",
];

export default function Dashboard() {
  return (
    <div className="page dashboard">
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">FRONTEND DEVELOPER</p>
          <h1 id="intro-title">
            안녕하세요,
            <br />
            프론트엔드 개발자
            <br />
            <span>원준엽입니다.</span>
          </h1>
          <p className="hero-description">
            React를 중심으로 웹 서비스를 만듭니다.
            <br />
            Vue, TypeScript, Next.js로 개발의 폭을 넓혀가고 있습니다.
          </p>
          <div className="hero-actions">
            <Link className="button-link" to="/projects">
              프로젝트 보기 <AiOutlineArrowRight aria-hidden="true" />
            </Link>
            <a className="text-link" href="mailto:gpgp08@naver.com">
              이메일 보내기
            </a>
          </div>
        </div>
        <figure className="profile">
          <img
            src="/img/profile.jpg"
            alt="프론트엔드 개발자 원준엽"
            width="240"
            height="300"
          />
          <figcaption>
            원준엽 <span>Frontend Developer</span>
          </figcaption>
        </figure>
      </section>
      <section className="info-section" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">ABOUT ME</p>
          <h2 id="about-title">소개와 연락처</h2>
        </div>
        <dl className="personal-info">
          <div>
            <dt>이름</dt>
            <dd>원준엽</dd>
          </div>
          <div>
            <dt>출생</dt>
            <dd>1996.10</dd>
          </div>
          <div>
            <dt>거주지</dt>
            <dd>서울시 강서구</dd>
          </div>
          <div>
            <dt>연락처</dt>
            <dd>
              <a href="tel:01024821996">010.2482.1996</a>
            </dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>
              <a href="mailto:gpgp08@naver.com">gpgp08@naver.com</a>
            </dd>
          </div>
        </dl>
      </section>
      <section className="info-section" aria-labelledby="strengths-title">
        <div className="section-heading">
          <p className="eyebrow">KEY SKILLS</p>
          <h2 id="strengths-title">이런 일을 할 수 있습니다</h2>
        </div>
        <ul className="strengths-list">
          {strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
        <Link className="text-link" to="/skills">
          기술과 경험 자세히 보기 <AiOutlineArrowRight aria-hidden="true" />
        </Link>
      </section>
      <section className="info-section" aria-labelledby="growth-title">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE & GROWTH</p>
          <h2 id="growth-title">함께 만들고, 꾸준히 배웁니다</h2>
        </div>
        <div className="growth-copy">
          <p>
            웹 SI와 에이전시에서 다양한 웹 개발 프로젝트를 수행하며 동료들과
            소통하고 협업하는 경험을 쌓았습니다.
          </p>
          <p>
            Postman, Figma, Swagger를 활용해 기획·디자인·API를 함께 검토하며
            개발합니다. 개인 프로젝트와 온라인 강의로 부족한 부분을 보완하고
            배운 내용을 직접 적용합니다.
          </p>
          <p className="content-note">경력·학력 정보 기준: 2025년 5월</p>
        </div>
      </section>
    </div>
  );
}
