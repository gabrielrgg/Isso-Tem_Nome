import styles from "./Hero.module.css";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { photos } from "@/content/data";
import { PhotoFrame } from "./PhotoFrame";
import { useScrollScene } from "@/lib/motion";
const portraits = [photos.vini, photos.erika, photos.maria, photos.malala];
export function Hero() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap }) => {
    gsap.from("[data-motion='hero-line'] > span", {
      yPercent: 110,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.09,
      delay: 0.15,
    });
    gsap.from("[data-motion='hero-sub']", { opacity: 0, y: 20, duration: 1, delay: 0.8 });
    gsap.from("[data-motion='hero-thumb']", {
      clipPath: "inset(100% 0 0 0)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.12,
      delay: 0.5,
    });
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
    });
    tl.to("[data-motion='hero-bg'] img", { scale: 1.25, yPercent: 8, ease: "none" }, 0)
      .to("[data-motion='hero-copy']", { yPercent: -25, opacity: 0.2, ease: "none" }, 0)
      .to("[data-motion='hero-thumbs']", { yPercent: -40, ease: "none" }, 0);
  });
  return (
    <section ref={ref} id="inicio" className={styles.section}>
      <PhotoFrame
        photo={photos.rally}
        eager
        className={styles.background}
        imgClassName={styles.backgroundImage}
        showCredit={false}
        data-motion="hero-bg"
      />
      <div className={styles.shade} aria-hidden />
      <div className={styles.content}>
        <div className={styles.copy} data-motion="hero-copy">
          <p className={styles.label}>Exposição digital · Educação para o respeito</p>
          <h1 className={styles.title}>
            {["O preconceito", "tem histórias.", "E todas merecem", "ser ouvidas."].map((l, i) => (
              <span key={l} className={styles.line} data-motion="hero-line">
                <span className={i === 3 ? styles.lineAccent : styles.lineText}>{l}</span>
              </span>
            ))}
          </h1>
          <p className={styles.subtitle} data-motion="hero-sub">
            Por trás de cada estatística existe uma vida.
          </p>
        </div>
        <div className={styles.portraits} data-motion="hero-thumbs">
          {portraits.map((p) => (
            <PhotoFrame
              key={p.src}
              photo={p}
              showCredit={false}
              className={styles.portrait}
              data-motion="hero-thumb"
            />
          ))}
        </div>
      </div>
      <a href="#sobre" className={styles.scrollLink}>
        <span className={styles.scrollLabel}>Role para começar</span>
        <ArrowDown className={styles.scrollIcon} />
      </a>
      <p className={styles.credit}>
        Foto: {photos.rally.credit} ·{" "}
        <a
          className={styles.creditLink}
          href={photos.rally.source}
          target="_blank"
          rel="noreferrer"
        >
          {photos.rally.license}
        </a>
      </p>
    </section>
  );
}
