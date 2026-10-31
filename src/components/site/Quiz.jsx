import styles from "./Quiz.module.css";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
const questions = [
  {
    scene:
      "No grupo da turma, alguém manda um meme comparando um colega negro a um macaco. Várias pessoas reagem rindo.",
    options: [
      { text: "Ignoro — é só uma piada.", ok: false },
      {
        text: "Digo no grupo que isso é racismo, apoio o colega no privado e, se continuar, levo à escola.",
        ok: true,
      },
      { text: "Saio do grupo sem falar nada.", ok: false },
    ],
    feedback:
      "“Piada” racista é racismo — e no Brasil, injúria racial é crime. Silêncio costuma ser lido como aprovação. Apoiar quem foi atingido e se posicionar muda o clima do grupo.",
  },
  {
    scene:
      "Uma colega trans pede para ser chamada pelo nome social. Um professor insiste em usar o nome antigo na chamada.",
    options: [
      {
        text: "Passo a usar o nome dela e, com ela, procuro a coordenação para garantir o nome social.",
        ok: true,
      },
      { text: "Uso o nome antigo também, já que está na lista.", ok: false },
      { text: "Acho que ela deveria aceitar, não é nada demais.", ok: false },
    ],
    feedback:
      "O uso do nome social é um direito garantido em escolas e órgãos públicos. Chamar alguém pelo nome que ela indica é a forma mais simples de respeito.",
  },
  {
    scene:
      "Numa reunião de grupo, toda vez que uma menina fala, um colega a interrompe e repete a ideia dela como se fosse sua.",
    options: [
      { text: "Fico quieto, ele fala mais alto mesmo.", ok: false },
      { text: "Digo: “Deixa ela terminar — a ideia é dela” e garanto o crédito.", ok: true },
      { text: "Rio da situação.", ok: false },
    ],
    feedback:
      "Interromper e se apropriar de ideias de mulheres é comum e tem nome (manterrupting e bropriating). Devolver a palavra e o crédito é uma atitude concreta contra a misoginia.",
  },
  {
    scene:
      "Dois meninos andam de mãos dadas no shopping. Alguém próximo começa a xingá-los e filmar.",
    options: [
      { text: "Também filmo, vai viralizar.", ok: false },
      {
        text: "Se for seguro, me aproximo deles, chamo a segurança e me ofereço como testemunha.",
        ok: true,
      },
      { text: "Acho que eles provocaram.", ok: false },
    ],
    feedback:
      "Desde 2019, o STF equipara a LGBTfobia ao crime de racismo. Afeto não é provocação. Sua segurança importa: acionar ajuda e ser testemunha já faz diferença. Denúncias: Disque 100.",
  },
];
export function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const q = questions[step];
  const choose = (i) => {
    if (picked !== null || !q?.options[i]) return;
    setPicked(i);
    if (q.options[i].ok) setScore((s) => s + 1);
  };
  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };
  const reset = () => {
    setPicked(null);
    setStep(0);
    setScore(0);
  };
  return (
    <section id="reflexao" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <p className={styles.label}>Reflexão</p>
          <h2 className={styles.heading}>O que você faria?</h2>
          <p className={styles.description}>
            Quatro situações do dia a dia. Não há pegadinha — há escolhas.
          </p>
          <div
            className={styles.progress}
            aria-label={`Progresso: ${Math.min(step + 1, questions.length)} de ${questions.length}`}
          >
            {questions.map((_, i) => (
              <span
                key={i}
                className={cn(
                  styles.progressStep,
                  i < step || (i === step && picked !== null)
                    ? styles.completed
                    : i === step
                      ? styles.current
                      : styles.pending,
                )}
              />
            ))}
          </div>
        </div>
        <div className={styles.interaction} aria-live="polite">
          {!q ? (
            <div className={styles.card}>
              <p className={styles.cardLabel}>Resultado</p>
              <p className={styles.score}>
                {score}/{questions.length}
              </p>
              <p className={styles.result}>
                {score === questions.length
                  ? "Você reconhece o preconceito e sabe agir. Leve isso para fora da tela."
                  : "Toda reflexão conta. Respeito é prática — e prática se aprende."}
              </p>
              <button type="button" onClick={reset} className={styles.resetButton}>
                <RotateCcw className={styles.icon} /> Recomeçar
              </button>
            </div>
          ) : (
            <div className={styles.card}>
              <p className={styles.cardLabel}>
                Situação {step + 1} de {questions.length}
              </p>
              <p className={styles.scene}>{q.scene}</p>
              <ul className={styles.options}>
                {q.options.map((o, i) => {
                  const state =
                    picked === null ? "idle" : o.ok ? "ok" : picked === i ? "bad" : "dim";
                  return (
                    <li key={o.text}>
                      <button
                        type="button"
                        onClick={() => choose(i)}
                        disabled={picked !== null}
                        className={cn(
                          styles.option,
                          state === "idle" && styles.idle,
                          state === "ok" && styles.correct,
                          state === "bad" && styles.incorrect,
                          state === "dim" && styles.dimmed,
                        )}
                      >
                        {o.text}
                        {state === "ok" && (
                          <span className={styles.srOnly}> (atitude recomendada)</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {picked !== null && (
                <div className={styles.feedback}>
                  <p className={styles.feedbackTitle}>
                    {q.options[picked]?.ok ? "Boa escolha." : "Vale repensar."}
                  </p>
                  <p className={styles.feedbackText}>{q.feedback}</p>
                  <button type="button" onClick={next} className={styles.nextButton}>
                    {step === questions.length - 1 ? "Ver resultado" : "Próxima situação →"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
