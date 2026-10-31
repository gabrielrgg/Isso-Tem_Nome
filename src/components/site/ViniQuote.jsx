import styles from "./ViniQuote.module.css";
import { useRef } from "react";
import { photos } from "@/content/data";
import { PhotoFrame } from "./PhotoFrame";
import { useScrollScene } from "@/lib/motion";
const quote = "Enquanto a cor da pele for mais importante que o brilho nos olhos, haverá guerra.";
export function ViniQuote() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap, desktop }) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: desktop ? "+=260%" : "+=180%",
        scrub: 0.6,
        pin: "[data-motion='vq-stage']",
      },
    });
    tl.fromTo(
      "[data-motion='vq-photo']",
      { clipPath: "inset(30% 35% 30% 35%)" },
      { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut", duration: 1 },
    )
      .fromTo(
        "[data-motion='vq-photo'] img",
        { scale: 1.4 },
        { scale: 1, ease: "none", duration: 1.6 },
        0,
      )
      .fromTo(
        "[data-motion='vq-word']",
        { opacity: 0.08, filter: "blur(6px)" },
        { opacity: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.4 },
        0.6,
      )
      .from("[data-motion='vq-cite']", { opacity: 0, y: 20, duration: 0.3 })
      .to("[data-motion='vq-stage']", { backgroundColor: "var(--racismo)", duration: 0.6 }, "+=0.2")
      .to("[data-motion='vq-photo']", { opacity: 0.25, duration: 0.6 }, "<")
      .from("[data-motion='vq-next']", { yPercent: 100, opacity: 0, duration: 0.5 }, "<0.1");
  });
  return (
    <section ref={ref} aria-label="Frase citada por Vinícius Júnior" className={styles.section}>
      <div className={styles.stage} data-motion="vq-stage">
        <div className={styles.content}>
          <PhotoFrame photo={photos.vini} className={styles.photo} data-motion="vq-photo" />
          <div className={styles.copy}>
            <p className={styles.label}>Frase citada</p>
            <blockquote className={styles.quote}>
              “
              {quote.split(" ").map((w, i) => (
                <span key={i} className={styles.word} data-motion="vq-word">
                  {w}{" "}
                </span>
              ))}
              ”
            </blockquote>
            <p className={styles.citation} data-motion="vq-cite">
              Frase <strong className={styles.emphasis}>citada por Vinícius Júnior</strong> em
              pronunciamento antirracista. A ideia é tradicionalmente associada a um discurso de
              Haile Selassie (1963), popularizado pela canção “War”, de Bob Marley — Vini não é o
              autor original.
            </p>
            <div className={styles.nextWrapper}>
              <a href="#temas" className={styles.nextLink} data-motion="vq-next">
                Racismo: quando a cor vira sentença →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
