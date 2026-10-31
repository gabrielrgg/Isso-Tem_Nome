import styles from "./Closing.module.css";
import { useRef } from "react";
import { photoCredits, licenseUrl, nav } from "@/content/data";
import { useScrollScene } from "@/lib/motion";
import { Brand } from "./Brand";
const actions = [
  { t: "Escute", d: "Quando alguém relata uma discriminação, acredite e não minimize." },
  {
    t: "Interrompa",
    d: "Não ria de piadas preconceituosas. Um “isso não tem graça” já muda o ambiente.",
  },
  {
    t: "Aprenda",
    d: "Leia, assista e siga pessoas negras, trans, mulheres e LGBTQIA+ falando por si.",
  },
  {
    t: "Denuncie",
    d: "Disque 100 (direitos humanos), 180 (violência contra a mulher) ou 190 em emergências.",
  },
];
export function Closing() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap }) => {
    gsap.from("[data-motion='ac-item']", {
      y: 50,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-motion='ac-grid']", start: "top 80%" },
    });
    gsap.fromTo(
      "[data-motion='cl-line'] > span",
      { yPercent: 105 },
      {
        yPercent: 0,
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-motion='cl-final']",
          start: "top 85%",
          end: "center 55%",
          scrub: true,
        },
      },
    );
  });
  return (
    <>
      <section ref={ref} aria-label="Ações práticas" className={styles.section}>
        <div className={styles.content}>
          <p className={styles.label}>Conscientização</p>
          <h2 className={styles.heading}>O que dá para fazer a partir de hoje.</h2>
          <div className={styles.actions} data-motion="ac-grid">
            {actions.map((a, i) => (
              <article key={a.t} className={styles.action} data-motion="ac-item">
                <span className={styles.number}>0{i + 1}</span>
                <h3 className={styles.actionTitle}>{a.t}</h3>
                <p className={styles.actionDescription}>{a.d}</p>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.conclusion} data-motion="cl-final">
          <h2 className={styles.conclusionTitle}>
            <span className={styles.line} data-motion="cl-line">
              <span className={styles.lineText}>O respeito não deveria</span>
            </span>
            <span className={styles.line} data-motion="cl-line">
              <span className={styles.lineText}>ser uma exceção.</span>
            </span>
            <span className={styles.line} data-motion="cl-line">
              <span className={styles.lineAccent}>Deveria ser o ponto de partida.</span>
            </span>
          </h2>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.about}>
            <p className={styles.brand}><Brand /></p>
            <p className={styles.description}>
              Exposição digital educativa para jovens. Conteúdo sem fins comerciais.
            </p>
            <nav aria-label="Rodapé" className={styles.navigation}>
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className={styles.navLink}>
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className={styles.credits}>
            <p className={styles.creditsLabel}>Créditos das fotografias</p>
            <ul className={styles.creditList}>
              {photoCredits.map(([key, p]) => (
                <li key={key}>
                  {p.alt} — {p.credit},{" "}
                  <a href={p.source} target="_blank" rel="noreferrer" className={styles.sourceLink}>
                    Fonte
                  </a>
                  {" · "}
                  {p.license ? (
                    <a
                      href={licenseUrl(p.license)}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.sourceLink}
                    >
                      {p.license}
                    </a>
                  ) : (
                    <span>{p.rights}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className={styles.sources}>
              Enquadramentos de exibição ajustados; arquivos originais preservados. As fotografias
              de arquivo de Dandara dos Santos e George Floyd têm direitos reservados; as fontes e
              os créditos de reprodução estão indicados acima.
            </p>
            <p className={styles.sourcesLabel}>Fontes dos dados</p>
            <p className={styles.sources}>
              <a
                className={styles.sourceLink}
                href="https://www.ibge.gov.br"
                target="_blank"
                rel="noreferrer"
              >
                IBGE
              </a>{" "}
              ·{" "}
              <a
                className={styles.sourceLink}
                href="https://antrabrasil.org"
                target="_blank"
                rel="noreferrer"
              >
                ANTRA
              </a>{" "}
              ·{" "}
              <a
                className={styles.sourceLink}
                href="https://forumseguranca.org.br"
                target="_blank"
                rel="noreferrer"
              >
                Fórum Brasileiro de Segurança Pública
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
