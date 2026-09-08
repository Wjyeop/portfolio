import { BiLogoGithub } from "react-icons/bi";
import { SiOpenai } from "react-icons/si";
import skillsData from "../data/skillsData.json";
import educationData from "../data/educationData.json";

const iconMap = { BiLogoGithub };

export default function Skills() {
  return (
    <div className="page skills">
      <header className="page-heading">
        <p className="eyebrow">SKILLS & EXPERIENCE</p>
        <h1>기술과 경험</h1>
        <p>프로젝트에 활용한 기술과 꾸준히 쌓아온 배움의 기록입니다.</p>
      </header>
      <section className="tools-section" aria-labelledby="tools-title">
        <div className="section-heading">
          <p className="eyebrow">AI-ASSISTED DEVELOPMENT</p>
          <h2 id="tools-title">생성형 AI 활용</h2>
        </div>
        <div className="skill-card">
          <h3>개발 과정에 AI를 적극 활용합니다</h3>
          <ul className="interest-tags ai-tools" aria-label="활용하는 AI 도구">
            <li>
              <span className="ai-tool-logo">
                <img src="/img/claude.svg" alt="" width="24" height="24" />
              </span>
              Claude
            </li>
            <li>
              <span className="ai-tool-logo">
                <SiOpenai size={24} aria-hidden="true" />
              </span>
              ChatGPT
            </li>
            <li>
              <span className="ai-tool-logo">
                <img src="/img/gemini.svg" alt="" width="24" height="24" />
              </span>
              Gemini
            </li>
          </ul>
          <p>
            Claude, ChatGPT, Gemini를 모두 적극 활용해 아이디어를 구체화하고
            개발 과정의 문제를 해결합니다. 새로운 도구와 기술을 직접 사용해 보며
            작업에 맞는 활용 방법을 찾아갑니다.
          </p>
          <p>
            AI가 제안한 내용은 직접 이해하고 검토하며, 코드의 동작을 확인한 뒤
            프로젝트에 적용합니다.
          </p>
        </div>
      </section>
      <section aria-labelledby="skills-title">
        <h2 className="section-title" id="skills-title">
          개발 기술
        </h2>
        <div className="skill-grid">
          {skillsData.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <article className="skill-card" key={skill.name}>
                <div className="card-heading">
                  <span className="skill-icon">
                    {Icon ? (
                      <Icon size={32} aria-hidden="true" />
                    ) : (
                      <img
                        src={skill.image}
                        alt=""
                        width="36"
                        height="36"
                        loading="lazy"
                      />
                    )}
                  </span>
                  <h3>{skill.name}</h3>
                </div>
                <ul>
                  {skill.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
      <section className="education-section" aria-labelledby="education-title">
        <div className="section-heading">
          <p className="eyebrow">CONTINUOUS LEARNING</p>
          <h2 id="education-title">교육과 학습</h2>
        </div>
        <p className="content-note">학력·교육 정보 기준: 2026년 9월</p>
        <div className="education-list">
          {educationData.map((edu) => (
            <article className="education-card" key={edu.name}>
              <img
                className="education-logo"
                src={edu.image}
                alt=""
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h3>{edu.name}</h3>
                <ul>
                  {edu.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
                {edu.link && (
                  <a
                    className="text-link"
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${edu.name} 학습 결과 보기 (새 탭)`}
                  >
                    학습 결과 보기 ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
