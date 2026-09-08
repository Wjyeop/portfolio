import { BiLogoGithub } from "react-icons/bi";
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
        <p className="content-note">학력·교육 정보 기준: 2025년 5월</p>
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
