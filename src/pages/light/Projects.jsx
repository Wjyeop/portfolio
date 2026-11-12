import projectData from "../../data/projectData.json";

export default function Projects() {
  return (
    <>
      <header className="intro">
        <div>
          <h1>프로젝트 {projectData.length}건</h1>
          <p className="lead">
            최근 것부터. 외부에 공개된 사이트는 링크를 달았습니다.
          </p>
        </div>
      </header>
      {projectData.map((item) => (
        <article className="work" key={item.id}>
          <img
            src={item.imageUrl}
            alt={`${item.name} 화면`}
            loading="lazy"
            decoding="async"
          />
          <div>
            <div className="work-head">
              <h2>{item.name}</h2>
              {item.duration && <span className="when">{item.duration}</span>}
            </div>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} 사이트 보기 (새 탭)`}
              >
                {item.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </a>
            )}
          </div>
        </article>
      ))}
    </>
  );
}
