import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    setMenuVisible(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuVisible) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuVisible(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuVisible(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuVisible]);

  return (
    <header className="site-header" ref={headerRef}>
      <Link
        className="brand"
        to="/"
        onClick={() => setMenuVisible(false)}
        aria-label="원준엽 포트폴리오 홈"
      >
        <span className="brand-mark">W.</span>
        <span>PORTFOLIO</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        ref={toggleRef}
        aria-label={menuVisible ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={menuVisible}
        aria-controls="primary-navigation"
        onClick={() => setMenuVisible((visible) => !visible)}
      >
        {menuVisible ? (
          <RxCross2 aria-hidden="true" />
        ) : (
          <RxHamburgerMenu aria-hidden="true" />
        )}
      </button>
      <nav
        id="primary-navigation"
        aria-label="주 메뉴"
        className={`navigation${menuVisible ? " is-open" : ""}`}
      >
        <NavLink to="/" end onClick={() => setMenuVisible(false)}>
          소개
        </NavLink>
        <NavLink to="/skills" onClick={() => setMenuVisible(false)}>
          기술과 경험
        </NavLink>
        <NavLink to="/projects" onClick={() => setMenuVisible(false)}>
          프로젝트
        </NavLink>
        <a
          href="https://github.com/Wjyeop"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuVisible(false)}
          aria-label="GitHub (새 탭)"
        >
          <AiFillGithub aria-hidden="true" /> GitHub{" "}
          <AiOutlineArrowUp className="external-arrow" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
