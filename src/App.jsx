import styles from "./App.module.css";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { ViniQuote } from "@/components/site/ViniQuote";
import { Themes } from "@/components/site/Themes";
import { Stories } from "@/components/site/Stories";
import { Stats } from "@/components/site/Stats";
import { Quiz } from "@/components/site/Quiz";
import { Closing } from "@/components/site/Closing";
export function App() {
  return (
    <>
      <a href="#sobre" className={styles.skipLink}>
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ViniQuote />
        <Themes />
        <Stories />
        <Stats />
        <Quiz />
        <Closing />
      </main>
    </>
  );
}
