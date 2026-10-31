import { chapters } from "@/content/people";
import { StoryChapter } from "./StoryChapter";
import styles from "./Stories.module.css";

export function Stories() {
  return (
    <section id="historias" className={styles.section} aria-labelledby="historias-titulo">
      <header className={styles.introduction}>
        <p className={styles.eyebrow}>Oito pessoas · Quatro temas</p>
        <h2 id="historias-titulo" className={styles.heading}>
          Histórias reais.
        </h2>
        <p className={styles.description}>
          Injustiça, resistência e transformação. Conheça as pessoas por trás dos temas — e os
          direitos que conectam suas histórias.
        </p>
        <nav className={styles.navigation} aria-label="Capítulos das histórias">
          {chapters.map((chapter, index) => (
            <a key={chapter.id} href={`#historia-${chapter.id}`}>
              <span>0{index + 1}</span>
              {chapter.name}
            </a>
          ))}
        </nav>
      </header>
      {chapters.map((chapter, index) => (
        <StoryChapter
          key={chapter.id}
          chapter={chapter}
          index={index}
          nextChapter={chapters[index + 1]}
        />
      ))}
    </section>
  );
}
