import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/data";
import { cn } from "@/lib/utils";
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 40);
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <header className={cn(styles.header, scrolled ? styles.scrolled : styles.transparent)}>
      <div className={styles.content}>
        <a href="#inicio" className={styles.brand}>
          Além do <span className={styles.brandAccent}>Preconceito</span>
        </a>
        <nav aria-label="Principal" className={styles.desktopNav}>
          <ul className={styles.links}>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={styles.navLink}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden />
      {open && (
        <nav id="menu-mobile" aria-label="Menu móvel" className={styles.mobileNav}>
          <ul className={styles.mobileLinks}>
            {nav.map((n, i) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={styles.mobileLink}>
                  <span className={styles.mobileNumber}>0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
