import { Link } from "react-router-dom";
import projectData from "../../data/projectData.json";
import educationData from "../../data/educationData.json";

const skills = [
  ["주로 씀", "React, TypeScript, JavaScript, HTML, CSS"],
  [
    "프로젝트에서 써봄",
    "Next.js, Recoil, Redux Toolkit, Zustand, styled-components, SCSS, Firebase, jsPDF, 카카오맵 API",
  ],
  ["도구", "Git/GitHub, Figma, Postman, Swagger, Claude·ChatGPT·Gemini"],
];

export default function Home() {
  return (
    <>
      <header className="intro">
        <div>
          <h1>원준엽</h1>
          <p className="role">프론트엔드 개발자</p>
          {/* TODO: 본인 문장으로 다듬기 */}
          <p className="lead">
            2022년부터 웹 SI와 에이전시에서 React로 기업 웹사이트와 관리자
            대시보드를 만들었습니다. 지금은 카페 홈페이지를 기획부터 운영까지
            혼자 맡아 하고 있습니다.
          </p>
          <dl className="contact">
            <dt>이메일</dt>
            <dd>
              <a href="mailto:wjyeop@gmail.com">wjyeop@gmail.com</a>
            </dd>
            <dt>전화</dt>
            <dd>
              <a href="tel:01024821996">010-2482-1996</a>
            </dd>
            <dt>GitHub</dt>
            <dd>
              <a
                href="https://github.com/Wjyeop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github.com/Wjyeop (새 탭)"
              >
                github.com/Wjyeop
              </a>
            </dd>
            <dt>거주</dt>
            <dd>서울 강서구</dd>
          </dl>
        </div>
        <img
          src="/img/portrait.jpg"
          alt="원준엽 증명사진"
          width="168"
          height="216"
        />
      </header>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title">프로젝트</h2>
        <table aria-label="프로젝트 요약">
          <tbody>
            {projectData.map((project) => (
              <tr key={project.id}>
                <td className="when">{project.duration || "—"}</td>
                <td>
                  {project.name}
                  {project.link && (
                    <>
                      {" · "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} 사이트 (새 탭)`}
                      >
                        사이트
                      </a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <Link to="/projects">프로젝트 상세 보기</Link>
        </p>
      </section>

      <section aria-labelledby="skills-title">
        <h2 id="skills-title">기술</h2>
        <dl className="rows">
          {skills.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="education-title">
        <h2 id="education-title">교육</h2>
        <table>
          <tbody>
            {educationData.map((edu) => (
              <tr key={edu.name}>
                <td>{edu.name}</td>
                <td>
                  {edu.description.join(" · ")}
                  {edu.link && (
                    <>
                      {" · "}
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${edu.name} 학습 결과 (새 탭)`}
                      >
                        결과물
                      </a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
