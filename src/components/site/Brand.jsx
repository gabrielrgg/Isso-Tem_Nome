import styles from "./Brand.module.css";
import logo from "@/assets/logo-isso-tem-nome.png";

export function Brand({ compact = false }) {
  return (
    <span className={styles.brand}>
      <span className={styles.mark} aria-hidden="true">
        <img src={logo} alt="" />
      </span>
    </span>
  );
}
