import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import useScrollReveal from "./hooks/useScrollReveal";
import useVisualEffects from "./hooks/useVisualEffects";
import "./App.css";

function Portfolio() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const progressRef = useRef(null);
  const previousPath = useRef(pathname);
  useScrollReveal(mainRef, pathname);
  useVisualEffects(mainRef, progressRef, pathname);

  useEffect(() => {
    const titles = {
      "/": "소개",
      "/skills": "기술과 경험",
      "/projects": "프로젝트",
    };
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    document.title = `${titles[normalizedPath] || "페이지를 찾을 수 없습니다"} | 원준엽 포트폴리오`;
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      mainRef.current?.focus();
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <div className="App">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>
      <Menu />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="*"
            element={
              <section className="page not-found">
                <p className="eyebrow">404</p>
                <h1>페이지를 찾을 수 없습니다.</h1>
                <p>주소를 확인하거나 소개 페이지로 돌아가 주세요.</p>
                <Link className="button-link" to="/">
                  소개 페이지로 이동
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>원준엽 · Frontend Developer</span>
        <a href="mailto:wjyeop@gmail.com">wjyeop@gmail.com</a>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}
