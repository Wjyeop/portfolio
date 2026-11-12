import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Nav from "./pages/light/Nav";
import Home from "./pages/light/Home";
import LightProjects from "./pages/light/Projects";
import useScrollReveal from "./hooks/useScrollReveal";
import useVisualEffects from "./hooks/useVisualEffects";
import "./App.css";
import "./light.css";

const titles = {
  "/": "소개",
  "/projects": "프로젝트",
  "/v2": "소개",
  "/v2/skills": "기술과 경험",
  "/v2/projects": "프로젝트",
};

function LightLayout() {
  return (
    <div className="light">
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="light-footer">
        <span>원준엽</span>
        <a href="mailto:wjyeop@gmail.com">wjyeop@gmail.com</a>
      </footer>
    </div>
  );
}

function DarkLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const progressRef = useRef(null);
  useScrollReveal(mainRef, pathname);
  useVisualEffects(mainRef, progressRef, pathname);
  useEffect(() => {
    document.body.classList.add("dark");
    return () => document.body.classList.remove("dark");
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>
      <Menu />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>원준엽 · Frontend Developer</span>
        <a href="mailto:wjyeop@gmail.com">wjyeop@gmail.com</a>
      </footer>
    </div>
  );
}

function Portfolio() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    document.title = `${titles[normalizedPath] || "페이지를 찾을 수 없습니다"} | 원준엽 포트폴리오`;
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      document.getElementById("main-content")?.focus();
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route element={<LightLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<LightProjects />} />
        <Route path="/skills" element={<Navigate to="/v2/skills" replace />} />
        <Route
          path="*"
          element={
            <section className="not-found">
              <h1>페이지를 찾을 수 없습니다.</h1>
              <p>주소를 확인하거나 소개 페이지로 돌아가 주세요.</p>
              <Link to="/">소개 페이지로 이동</Link>
            </section>
          }
        />
      </Route>
      <Route path="/v2" element={<DarkLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}
