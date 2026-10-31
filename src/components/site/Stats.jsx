import styles from "./Stats.module.css";
import { useRef } from "react";
import { useScrollScene } from "@/lib/motion";
import { cn } from "@/lib/utils";
const stats = [
  {
    value: 65.9,
    decimals: 1,
    suffix: "%",
    color: styles.racismo,
    bar: 65.9,
    label: "a mais de renda média do trabalho para pessoas brancas em relação a pretas e pardas",
    detail: "Desigualdade racial de rendimentos, 2024.",
    source: "IBGE — 2024",
    url: "https://www.ibge.gov.br",
  },
  {
    value: 80,
    color: styles.transfobia,
    label: "assassinatos de pessoas trans registrados no Brasil",
    detail: "Dossiê de assassinatos e violências contra pessoas trans, 2025.",
    source: "ANTRA — 2025",
    url: "https://antrabrasil.org",
  },
  {
    value: 1568,
    color: styles.misoginia,
    label: "feminicídios registrados no Brasil",
    detail: "Mulheres mortas por serem mulheres, 2025.",
    source: "Fórum Brasileiro de Segurança Pública — 2025",
    url: "https://forumseguranca.org.br",
  },
  {
    value: 2480,
    color: styles.lgbt,
    label: "registros na categoria conjunta “racismo por homofobia ou transfobia”",
    detail:
      "Dados de 2024 publicados no Anuário 2025. A categoria reúne homofobia e transfobia — não é só homofobia.",
    source: "FBSP — Anuário 2025 (dados de 2024)",
    url: "https://forumseguranca.org.br",
  },
];
const fmt = (n, d = 0) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
export function Stats() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap }) => {
    gsap.utils.toArray("[data-motion='stat']").forEach((el) => {
      const num = el.querySelector("[data-motion='stat-num']");
      const target = Number(num.dataset.value);
      const d = Number(num.dataset.decimals || 0);
      const o = { v: 0 };
      gsap.to(o, {
        v: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
        onUpdate: () => (num.textContent = fmt(o.v, d)),
      });
      const bar = el.querySelector("[data-motion='stat-bar']");
      if (bar)
        gsap.from(bar, {
          scaleX: 0,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
    });
  });
  return (
    <section ref={ref} id="dados" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <p className={styles.label}>Dados verificáveis</p>
          <h2 className={styles.heading}>
            Números não sentem. <br />
            Pessoas, sim.
          </h2>
        </div>
        <div className={styles.cards}>
          {stats.map((s) => (
            <article key={s.label} className={styles.card} data-motion="stat">
              <span className={cn(styles.accent, s.color)} aria-hidden />
              <p className={styles.value}>
                <span
                  className={styles.number}
                  data-value={s.value}
                  data-decimals={s.decimals ?? 0}
                  data-motion="stat-num"
                >
                  {fmt(s.value, s.decimals)}
                </span>
                {s.suffix}
              </p>
              <p className={styles.description}>{s.label}</p>
              {s.bar !== undefined && (
                <div className={styles.track} role="img" aria-label={`${fmt(s.bar, 1)} por cento`}>
                  <div
                    className={cn(styles.bar, s.color)}
                    style={{ width: `${s.bar}%` }}
                    data-motion="stat-bar"
                  />
                </div>
              )}
              <p className={styles.detail}>{s.detail}</p>
              <a href={s.url} target="_blank" rel="noreferrer" className={styles.source}>
                Fonte: {s.source} ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
