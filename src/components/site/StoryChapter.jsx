import { useRef } from "react";
import { PhotoFrame } from "./PhotoFrame";
import { useScrollScene } from "@/lib/motion";
import { cn } from "@/lib/utils";
import styles from "./StoryChapter.module.css";

export function StoryChapter({ chapter, index, nextChapter }) {
  const ref = useRef(null);

  useScrollScene(ref, ({ gsap, wide }) => {
    const section = ref.current;
    const title = section.querySelector("[data-chapter-title]");
    gsap.fromTo(
      section,
      { backgroundColor: "#171C24" },
      {
        backgroundColor: chapter.color,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 85%", end: "top 15%", scrub: true },
      },
    );
    gsap.from(title, {
      y: 35,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: title, start: "top 90%" },
    });
    if (!wide) return;

    const visual = section.querySelector("[data-story-visual]");
    const layers = Array.from(visual.querySelectorAll("[data-story-layer]"));
    const steps = Array.from(section.querySelectorAll("[data-person]"));
    visual.dataset.animated = "true";
    gsap.set(layers[1], { clipPath: "inset(100% 0 0 0)" });
    gsap
      .timeline({
        scrollTrigger: { trigger: steps[1], start: "top bottom", end: "top 25%", scrub: 0.45 },
      })
      .to(layers[0], { opacity: 0.3, scale: 1.04, ease: "none" }, 0)
      .to(layers[1], { clipPath: "inset(0% 0 0 0)", ease: "power1.inOut" }, 0);

    steps.forEach((step, personIndex) => {
      const image = layers[personIndex].querySelector("img");
      if (image)
        gsap.fromTo(
          image,
          { scale: 1.1, yPercent: -3 },
          {
            scale: 1.02,
            yPercent: 3,
            ease: "none",
            scrollTrigger: { trigger: step, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      gsap.fromTo(
        step.querySelector("h4"),
        { y: 24 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: { trigger: step, start: "top 85%", end: "top 35%", scrub: true },
        },
      );
    });
    return () => {
      delete visual.dataset.animated;
    };
  });

  return (
    <section
      ref={ref}
      id={`historia-${chapter.id}`}
      data-chapter={chapter.id}
      aria-labelledby={`titulo-${chapter.id}`}
      style={{ "--chapter-color": chapter.color }}
      className={cn(
        styles.chapter,
        index % 2 === 1 && styles.reverse,
        chapter.id === "misoginia" && styles.immersive,
      )}
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          Capítulo 0{index + 1} · {chapter.name}
        </p>
        <h3 id={`titulo-${chapter.id}`} className={styles.title} data-chapter-title>
          {chapter.title}
        </h3>
        <p className={styles.intro}>{chapter.intro}</p>
        <div className={styles.pairNames} aria-label="Duas histórias neste capítulo">
          {chapter.people.map((person) => (
            <a key={person.id} href={`#${person.id}`}>
              {person.name} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </header>

      <div className={styles.storyGrid}>
        <div className={styles.visual} data-story-visual aria-hidden="true">
          <div className={styles.layers}>
            {chapter.people.map((person, personIndex) => (
              <div key={person.id} className={styles.layer} data-story-layer>
                <PhotoFrame
                  photo={person.photo}
                  showCredit={false}
                  decorative
                  className={styles.portrait}
                />
                {person.photo.src && (
                  <>
                    <div className={styles.photoShade} />
                    <p className={styles.photoLabel}>
                      <span>0{personIndex + 1} / 02</span>
                      {person.name}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.steps}>
          {chapter.people.map((person, personIndex) => (
            <article
              id={person.id}
              key={person.id}
              data-person={person.id}
              data-person-theme={person.theme}
              className={styles.person}
              aria-labelledby={`nome-${person.id}`}
            >
              <PhotoFrame photo={person.photo} className={styles.mobilePhoto} />
              <div className={styles.copy}>
                <p className={styles.eyebrow}>
                  0{personIndex + 1} / 02 · {person.tag}
                </p>
                <h4 id={`nome-${person.id}`} className={styles.name}>
                  {person.name}
                </h4>
                <p className={styles.meta}>{person.meta}</p>
                <p className={styles.personTitle}>{person.title}</p>
                <p className={styles.body}>{person.bio}</p>
                <p className={styles.body}>{person.context}</p>
                <p className={styles.impact}>{person.impact}</p>
                {person.documentary && (
                  <div className={styles.documentary}>
                    <PhotoFrame photo={person.documentary} className={styles.documentaryPhoto} />
                    <p>
                      Registro documental de homenagem a George Floyd. Não se trata de um retrato
                      direto.
                    </p>
                  </div>
                )}
                <nav aria-label={`Fontes sobre ${person.name}`} className={styles.sources}>
                  <span className={styles.sourcesLabel}>Conheça as fontes</span>
                  {person.sources.map((source) => (
                    <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                      {source.label} <span aria-hidden>↗</span>
                    </a>
                  ))}
                </nav>
              </div>
            </article>
          ))}
        </div>
      </div>
      <a className={styles.next} href={nextChapter ? `#historia-${nextChapter.id}` : "#dados"}>
        <span>{nextChapter ? "Continue a exposição" : "Das histórias aos dados"}</span>
        <strong>
          {nextChapter ? nextChapter.name : "Números não sentem. Pessoas, sim."}{" "}
          <span aria-hidden>↓</span>
        </strong>
      </a>
    </section>
  );
}
