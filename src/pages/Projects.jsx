import { AiOutlineArrowUp } from "react-icons/ai";
import projectData from "../data/projectData.json";

export default function Projects() {
  return (
    <div className="page projects">
      <header className="page-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>
          프로젝트<span className="heading-count">{projectData.length}</span>
        </h1>
        <p>
          기업 웹사이트부터 데이터 대시보드까지, 직접 참여한 프로젝트를
          소개합니다.
        </p>
      </header>
      <div className="project-list">
        {projectData.map((item, index) => (
          <article className="project-card" key={item.id}>
            <div className="project-image">
              <img
                src={item.imageUrl}
                alt={`${item.name} 화면`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
                {item.duration && <span>{item.duration}</span>}
              </div>
              <h2>{item.name}</h2>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {item.link && (
                <a
                  className="text-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} 사이트 보기 (새 탭)`}
                >
                  사이트 보기{" "}
                  <AiOutlineArrowUp
                    className="external-arrow"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
