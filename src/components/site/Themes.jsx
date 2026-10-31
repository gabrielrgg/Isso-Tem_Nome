import styles from "./Themes.module.css";
import { useRef } from "react";
import { photos } from "@/content/data";
import { PhotoFrame } from "./PhotoFrame";
import { useScrollScene } from "@/lib/motion";
import { cn } from "@/lib/utils";
const themes = [
  {
    key: "racismo",
    name: "Racismo",
    color: styles.racismo,
    text: styles.racismoText,
    word: "Cor",
    lede: "Racismo é tratar pessoas como inferiores por sua cor, raça ou origem étnica.",
    body: [
      "Ele aparece em xingamentos no estádio, mas também no que não se vê: na diferença de salário, na abordagem policial, em quem é seguido no shopping.",
      "Vinícius Júnior enfrentou ofensas racistas repetidas no futebol espanhol. George Floyd foi morto por um policial nos EUA. Duas histórias, um mesmo sistema.",
    ],
    photos: [photos.vini, photos.floyd],
  },
  {
    key: "transfobia",
    name: "Transfobia",
    color: styles.transfobia,
    text: styles.transfobiaText,
    word: "Ser",
    lede: "Transfobia é o preconceito contra pessoas trans e travestis — quem não se identifica com o gênero atribuído ao nascer.",
    body: [
      "Identidade de gênero é quem a pessoa é (mulher, homem, não binária). Orientação sexual é por quem ela sente atração. São coisas diferentes.",
      "Respeitar começa pelo básico: usar o nome e os pronomes que a pessoa indica. O Brasil segue entre os países que mais registram assassinatos de pessoas trans.",
    ],
    note: "Espaço editorial reservado para futuras histórias de pessoas trans, contadas por elas.",
  },
  {
    key: "misoginia",
    name: "Misoginia",
    color: styles.misoginia,
    text: styles.misoginiaText,
    word: "Voz",
    lede: "Misoginia é o desprezo ou ódio às mulheres — e sustenta desigualdade e violência.",
    body: [
      "Ela está na piada que diminui, na interrupção constante, no salário menor pelo mesmo trabalho e no controle sobre o corpo e a roupa.",
      "Em seu extremo, vira feminicídio: o assassinato de uma mulher por ser mulher, muitas vezes por parceiros ou ex-parceiros.",
    ],
    note: "Espaço editorial reservado para futuras histórias de mulheres que enfrentaram a misoginia.",
  },
  {
    key: "lgbt",
    name: "LGBTfobia",
    color: styles.lgbt,
    text: styles.lgbtText,
    word: "Amar",
    lede: "Homofobia e LGBTfobia são a hostilidade contra lésbicas, gays, bissexuais e outras pessoas LGBTQIA+.",
    body: [
      "Gloria Groove e Pabllo Vittar levaram a arte drag ao centro da música pop brasileira — e, com a visibilidade, enfrentam ataques LGBTfóbicos.",
      "Importante: drag é uma expressão artística, uma performance. Não é sinônimo de pessoa trans. Uma drag queen pode ser cis ou trans; são dimensões diferentes.",
    ],
    photos: [photos.gloria, photos.pabllo],
  },
];
function Visual({ t, className }) {
  if (t.photos) {
    return (
      <div className={cn(styles.photos, className)}>
        <PhotoFrame photo={t.photos[0]} className={styles.primaryPhoto} />
        <PhotoFrame photo={t.photos[1]} className={styles.secondaryPhoto} />
      </div>
    );
  }
  return (
    <div className={cn(styles.illustration, t.color, className)}>
      <span className={styles.illustrationLabel}>{t.name}</span>
      <span className={styles.illustrationWord}>{t.word}</span>
      <p className={styles.illustrationNote}>{t.note}</p>
    </div>
  );
}
export function Themes() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap, ScrollTrigger, desktop }) => {
    if (!desktop) return;
    const visuals = gsap.utils.toArray("[data-motion='th-visual']");
    gsap.set(visuals.slice(1), { clipPath: "inset(100% 0 0 0)" });
    gsap.utils.toArray("[data-motion='th-block']").forEach((block, i) => {
      const visual = visuals[i];
      if (i > 0 && visual) {
        gsap.to(visual, {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: { trigger: block, start: "top 85%", end: "top 35%", scrub: true },
        });
      }
      ScrollTrigger.create({
        trigger: block,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (s) =>
          s.isActive &&
          gsap.to("[data-motion='th-index']", {
            yPercent: -100 * i,
            duration: 0.5,
            ease: "power3.out",
          }),
      });
      gsap.fromTo(
        block.querySelectorAll("[data-motion='th-reveal']"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: block, start: "top 75%", end: "top 35%", scrub: true },
        },
      );
    });
  });
  return (
    <section ref={ref} id="temas" className={styles.section}>
      <div className={styles.introduction}>
        <p className={styles.label}>Quatro temas</p>
        <h2 className={styles.heading}>
          Formas diferentes de negar a mesma coisa:{" "}
          <span className={styles.racismoText}>a humanidade do outro.</span>
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.stickyVisual}>
          <div className={styles.visualStack}>
            {themes.map((t, i) => (
              <div
                key={t.key}
                className={styles.visual}
                style={{ zIndex: i }}
                data-motion="th-visual"
              >
                <Visual t={t} />
              </div>
            ))}
            <div className={styles.counter}>
              <div className={styles.counterTrack} data-motion="th-index">
                {themes.map((t, i) => (
                  <div key={t.key} className={styles.counterLabel}>
                    0{i + 1} / {t.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articles}>
          {themes.map((t, i) => (
            <article key={t.key} className={styles.article} data-motion="th-block">
              <div className={styles.mobileVisual}>
                <Visual t={t} />
              </div>
              <p className={cn(styles.articleLabel, t.text)} data-motion="th-reveal">
                0{i + 1} — Tema
              </p>
              <h3 className={styles.articleTitle} data-motion="th-reveal">
                {t.name}
              </h3>
              <p className={styles.lead} data-motion="th-reveal">
                {t.lede}
              </p>
              {t.body.map((b) => (
                <p key={b} className={styles.description} data-motion="th-reveal">
                  {b}
                </p>
              ))}
              <span className={cn(styles.accent, t.color)} aria-hidden data-motion="th-reveal" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
