import projectData from "../data/projectData.json";

export default function Projects() {
  return (
    <div className="projects">
      <div className="title">
        <h1 className="small">PROJECT</h1>
        <h1 className="big">PROJECT</h1>
      </div>
      <div className="projects-1">
        {projectData.map((item, index) => (
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
                  <a
                    className="link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
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