import { BiLogoReact, BiLogoGithub } from "react-icons/bi";
import skillsData from '../data/skillsData.json';
import educationData from '../data/educationData.json';

const IconMap = {
  BiLogoReact: BiLogoReact,
  BiLogoGithub: BiLogoGithub,
};

function Skills() {
  return (
    <div className="Skills">
      <div className="title">
        <h1 className="small">SKILLS</h1>
        <h1 className="big">SKILLS</h1>
      </div>

      <div className="Skills-1">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon ? IconMap[skill.icon] : null;
          return (
            <div className={skill.name.toLowerCase().replace(/\s/g, "")} key={index}>
              <div>
                {IconComponent ? (
                  <IconComponent size={40} color="black" />
                ) : (
                  <img src={skill.image} alt={skill.name} />
                )}
                <span>{skill.name}</span>
              </div>
              <ul>
                {skill.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <h1>EXPERIENCE AND EDUCATION</h1>

      <div className="Skills-2">
        {educationData.map((edu, index) => (
          <div className="skill" key={index}>
            <div>
              <img
                src={edu.image}
                style={edu.style}
                alt={edu.name}
              />
              <span>{edu.name}</span>
            </div>
            <ul>
              {edu.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
              {edu.link && (
                <a className="link" href={edu.link}>
                  링크 이동
                </a>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;