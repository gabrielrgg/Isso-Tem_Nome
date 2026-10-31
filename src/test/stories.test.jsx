import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { people, chapters } from "@/content/people";
import { Stories } from "@/components/site/Stories";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { photos } from "@/content/data";

vi.mock("@/lib/motion", () => ({ useScrollScene: vi.fn() }));
afterEach(cleanup);

describe("Oito trajetórias", () => {
  it("presents exactly eight people, two per topic, with biography and sources", () => {
    const { container } = render(<Stories />);
    expect(people).toHaveLength(8);
    expect(new Set(people.map((person) => person.id)).size).toBe(8);
    expect(chapters).toHaveLength(4);
    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(8);
    for (const chapter of chapters) {
      expect(chapter.people).toHaveLength(2);
      expect(container.querySelectorAll(`[data-person-theme="${chapter.id}"]`)).toHaveLength(2);
      for (const person of chapter.people) {
        const article = container.querySelector(`#${person.id}`);
        expect(within(article).getByRole("heading", { name: person.name })).toBeInTheDocument();
        for (const text of [person.bio, person.context, person.impact])
          expect(article).toHaveTextContent(text);
        const sources = within(article).getByRole("navigation", {
          name: `Fontes sobre ${person.name}`,
        });
        expect(within(sources).getAllByRole("link")).toHaveLength(person.sources.length);
      }
    }
  });

  it("renders all eight real portraits with sources and preserves editorial credits", () => {
    for (const person of people) {
      expect(person.photo.src).toBeTruthy();
      expect(person.photo.source).toMatch(/^https:\/\//);
    }
    const { container } = render(<PhotoFrame photo={photos.dandara} />);
    expect(screen.getByAltText(photos.dandara.alt)).toHaveAttribute("src", photos.dandara.src);
    expect(screen.getByText("Direitos reservados")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Fonte" })).toHaveAttribute(
      "href",
      photos.dandara.source,
    );
    expect(container.querySelector("a:not([href])")).toBeNull();
  });

  it("keeps a readable fallback if a local photo fails", () => {
    render(<PhotoFrame photo={photos.maria} />);
    fireEvent.error(screen.getByAltText(photos.maria.alt));
    expect(screen.getByText("Maria da Penha")).toBeInTheDocument();
    expect(screen.getByText("Fotografia indisponível")).toBeInTheDocument();
  });
});
