import styles from "./Stories.module.css";
import { useRef } from "react";
import { photos } from "@/content/data";
import { PhotoFrame } from "./PhotoFrame";
import { useScrollScene } from "@/lib/motion";
import { cn } from "@/lib/utils";
const stories = [
  {
    name: "Vinícius Júnior",
    tag: "Racismo no futebol",
    tagClass: styles.racismo,
    photo: photos.vini,
    meta: "Atacante · São Gonçalo (RJ), 2000",
    bio: "Revelado pelo Flamengo e estrela do Real Madrid, Vini foi alvo de insultos racistas em estádios espanhóis em várias ocasiões. Em vez de se calar, denunciou publicamente, cobrou punições e transformou cada episódio em debate mundial sobre racismo no esporte — com casos que chegaram à condenação de torcedores na Espanha.",
    layout: styles.columns,
    photoClass: styles.featuredPhoto,
    copyClass: styles.narrowCopy,
  },
  {
    name: "George Floyd",
    tag: "Violência policial",
    tagClass: styles.racismo,
    photo: photos.floyd,
    meta: "1973 – 2020 · Minneapolis, EUA",
    bio: "Em 25 de maio de 2020, George Floyd, homem negro de 46 anos, morreu durante uma abordagem policial em Minneapolis, após um policial manter o joelho sobre seu pescoço por mais de nove minutos. O vídeo gerou protestos em todo o mundo e fortaleceu o movimento Black Lives Matter. O policial Derek Chauvin foi condenado por homicídio em 2021.",
    layout: styles.reversed,
    photoClass: styles.narrowPhoto,
    copyClass: styles.wideCopy,
  },
  {
    name: "Gloria Groove",
    tag: "Arte drag e representatividade",
    tagClass: styles.lgbt,
    photo: photos.gloria,
    meta: "Drag queen, cantora e compositora · São Paulo",
    bio: "Persona artística de Daniel Garcia, Gloria Groove é uma das vozes mais fortes do pop e do rap brasileiros. Negra, periférica e LGBTQIA+, usa a arte drag para ocupar palcos, premiações e as paradas de sucesso — mostrando a jovens que existir com autenticidade também é uma forma de resistência.",
    layout: styles.columns,
    photoClass: styles.photo,
    copyClass: styles.balancedCopy,
  },
  {
    name: "Pabllo Vittar",
    tag: "LGBTfobia e visibilidade",
    tagClass: styles.lgbt,
    photo: photos.pabllo,
    meta: "Drag queen e cantora · São Luís (MA), 1994",
    bio: "Uma das drag queens mais seguidas do mundo nas redes, Pabllo Vittar levou o tecnobrega, o forró e o pop a festivais internacionais. A visibilidade veio acompanhada de ataques LGBTfóbicos, que ela enfrenta com arte, humor e posicionamento — abrindo caminho para a comunidade LGBTQIA+ na cultura brasileira.",
    layout: styles.reversed,
    photoClass: styles.photo,
    copyClass: styles.balancedCopy,
  },
];
export function Stories() {
  const ref = useRef(null);
  useScrollScene(ref, ({ gsap }) => {
    gsap.utils.toArray("[data-motion='st-item']").forEach((el) => {
      const fig = el.querySelector("figure");
      const img = el.querySelector("figure img");
      gsap.fromTo(
        fig,
        { clipPath: "inset(12% 12% 12% 12%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 90%", end: "top 30%", scrub: true },
        },
      );
      if (img)
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.18 },
          {
            yPercent: 8,
            scale: 1.05,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      gsap.from(el.querySelectorAll("[data-motion='st-copy'] > *"), {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 65%" },
      });
    });
  });
  return (
    <section ref={ref} id="historias" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h2 className={styles.heading}>Histórias</h2>
          <p className={styles.description}>
            Quatro trajetórias reais. Cada uma revela uma face do preconceito — e uma forma de
            enfrentá-lo.
          </p>
        </div>
        <div className={styles.stories}>
          {stories.map((s, i) => (
            <article key={s.name} className={cn(styles.story, s.layout)} data-motion="st-item">
              <PhotoFrame photo={s.photo} className={s.photoClass} />
              <div className={cn(styles.copy, s.copyClass)} data-motion="st-copy">
                <p className={cn(styles.label, s.tagClass)}>
                  0{i + 1} · {s.tag}
                </p>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.meta}>{s.meta}</p>
                <p className={styles.biography}>{s.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
