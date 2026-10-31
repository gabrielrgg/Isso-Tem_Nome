import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "@/App";
import { Quiz } from "@/components/site/Quiz";
import { Header } from "@/components/site/Header";
vi.mock("@/lib/motion", () => ({ useScrollScene: vi.fn() }));
afterEach(cleanup);
describe("Exposição", () => {
  it("renders all sections and valid internal navigation targets", () => {
    const { container } = render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("O preconceito");
    for (const target of ["hero-bg", "hero-thumb", "vq-photo", "th-visual", "th-reveal"]) {
      expect(container.querySelector(`[data-motion="${target}"]`)).not.toBeNull();
    }
    for (const id of ["inicio", "sobre", "temas", "historias", "dados", "reflexao"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
    for (const link of container.querySelectorAll('a[href^="#"]')) {
      expect(container.querySelector(link.hash)).not.toBeNull();
    }
  });
  it("opens the mobile menu, closes by Escape and restores scrolling", () => {
    document.body.style.overflow = "auto";
    const { unmount } = render(<Header />);
    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("auto");
    fireEvent.click(toggle);
    fireEvent.click(
      within(screen.getByRole("navigation", { name: "Menu móvel" })).getByRole("link", {
        name: /Sobre/,
      }),
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    unmount();
    expect(document.body.style.overflow).toBe("auto");
    document.body.style.overflow = "";
  });
});
describe("Quiz", () => {
  it("scores each answer once, completes all questions and resets", () => {
    render(<Quiz />);
    const answers = [/Digo no grupo/, /Passo a usar/, /Deixa ela terminar/, /Se for seguro/];
    for (let index = 0; index < answers.length; index++) {
      const answer = screen.getByRole("button", { name: answers[index] });
      fireEvent.click(answer);
      fireEvent.click(answer);
      expect(answer).toBeDisabled();
      expect(screen.getByText("Boa escolha.")).toBeInTheDocument();
      fireEvent.click(
        screen.getByRole("button", { name: index === 3 ? "Ver resultado" : "Próxima situação →" }),
      );
    }
    expect(screen.getByText("4/4")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Recomeçar" }));
    expect(screen.getByText("Situação 1 de 4")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Ignoro/ }));
    expect(screen.getByText("Vale repensar.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Próxima situação →" })).toBeInTheDocument();
  });
});
