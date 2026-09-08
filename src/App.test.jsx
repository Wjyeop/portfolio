import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";
import App from "./App";
import projectData from "./data/projectData.json";
import skillsData from "./data/skillsData.json";
import educationData from "./data/educationData.json";

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  window.scrollTo = vi.fn();
});

test("navigation closes the menu and moves focus and scroll to the new page", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "메뉴 열기" }));
  expect(screen.getByRole("button", { name: "메뉴 닫기" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  fireEvent.click(
    within(screen.getByRole("navigation")).getByRole("link", {
      name: "프로젝트",
    }),
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "프로젝트",
  );
  expect(screen.getByRole("button", { name: "메뉴 열기" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  expect(screen.getByRole("main")).toHaveFocus();
  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  expect(document.title).toBe("프로젝트 | 원준엽 포트폴리오");
  expect(
    within(screen.getByRole("navigation")).getByRole("link", {
      name: "프로젝트",
    }),
  ).toHaveAttribute("aria-current", "page");
});

test("Escape returns focus to the menu button and clicking outside closes the menu", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "메뉴 열기" }));
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.getByRole("button", { name: "메뉴 열기" })).toHaveFocus();
  fireEvent.click(screen.getByRole("button", { name: "메뉴 열기" }));
  fireEvent.pointerDown(screen.getByRole("main"));
  expect(screen.getByRole("button", { name: "메뉴 열기" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
});

test("direct project visits show every project and its recorded duration", () => {
  window.history.replaceState({}, "", "/projects");
  render(<App />);
  expect(screen.getAllByRole("article")).toHaveLength(projectData.length);
  projectData.forEach((project) => {
    const article = screen
      .getByRole("heading", { name: project.name })
      .closest("article");
    expect(within(article).getByRole("img")).toHaveAttribute(
      "src",
      project.imageUrl,
    );
    if (project.duration)
      expect(within(article).getByText(project.duration)).toBeInTheDocument();
  });
});

test("skills and education have one page heading and accessible external links", () => {
  window.history.replaceState({}, "", "/skills");
  render(<App />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(screen.getAllByRole("article")).toHaveLength(
    skillsData.length + educationData.length,
  );
  screen
    .getAllByRole("link")
    .filter((link) => link.target === "_blank")
    .forEach((link) => {
      expect(link.rel).toContain("noopener");
      expect(link).toHaveAccessibleName(/새 탭/);
    });
});

test("unknown routes provide a working return link", () => {
  window.history.replaceState({}, "", "/missing/page");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "페이지를 찾을 수 없습니다",
  );
  fireEvent.click(screen.getByRole("link", { name: "소개 페이지로 이동" }));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "원준엽입니다",
  );
});
