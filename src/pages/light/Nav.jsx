import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="light-header">
      <Link to="/" className="light-name">
        원준엽
      </Link>
      <nav aria-label="주 메뉴">
        <NavLink to="/" end>
          소개
        </NavLink>
        <NavLink to="/projects">프로젝트</NavLink>
        <a
          href="https://github.com/Wjyeop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (새 탭)"
        >
          GitHub
        </a>
        <Link to="/v2">v2</Link>
      </nav>
    </header>
  );
}
