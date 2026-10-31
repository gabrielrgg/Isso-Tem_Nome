import styles from "./Intro.module.css";
import { useRef } from "react";
import { useScrollScene } from "@/lib/motion";
const concepts = [
  {
    n: "01",
    t: "Preconceito",
    d: "É um julgamento formado antes de conhecer alguém — baseado em cor, gênero, orientação sexual, origem ou corpo. Ele nasce de estereótipos aprendidos.",
  },
  {
    n: "02",
    t: "Discriminação",
    d: "É quando o preconceito vira ação: excluir, ofender, negar emprego, atendimento ou segurança. No Brasil, racismo e LGBTfobia são crimes.",
  },
  {
    n: "03",
    t: "Respeito",
    d: "É reconhecer que toda pessoa tem a mesma dignidade e os mesmos direitos. Não depende de concordar — depende de não ferir.",
  },
];
const lead =
  "Ninguém nasce com preconceito. Ele é aprendido — em piadas, silêncios e estruturas que parecem normais. E tudo que se aprende pode ser repensado.";
export function Intro() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap }) => {
    gsap.fromTo(
      "[data-motion='intro-word']",
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-motion='intro-lead']",
          start: "top 80%",
          end: "bottom 45%",
          scrub: true,
        },
      },
    );
    gsap.from("[data-motion='concept']", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-motion='concepts']", start: "top 80%" },
    });
  });
  return (
    <section ref={ref} id="sobre" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <p className={styles.label}>Sobre a exposição</p>
          <p className={styles.lead} data-motion="intro-lead">
            {lead.split(" ").map((w, i) => (
              <span key={i} className={styles.word} data-motion="intro-word">
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.concepts} data-motion="concepts">
          {concepts.map((c) => (
            <article key={c.n} className={styles.concept} data-motion="concept">
              <span className={styles.number}>{c.n}</span>
              <h3 className={styles.title}>{c.t}</h3>
              <p className={styles.description}>{c.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
