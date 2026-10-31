import styles from "./PhotoFrame.module.css";
import { useState } from "react";
import { cn } from "@/lib/utils";
/** Real photograph with credit line and an elegant typographic fallback if loading fails. */
export function PhotoFrame({
  photo,
  className,
  imgClassName,
  showCredit = true,
  eager,
  ...figureProps
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure {...figureProps} className={cn(styles.frame, className)}>
      {failed ? (
        <div className={styles.fallback}>
          <p className={styles.fallbackLabel}>{photo.alt}</p>
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          style={{ objectPosition: photo.position }}
          className={cn(styles.image, imgClassName)}
        />
      )}
      {showCredit && (
        <figcaption className={styles.credit}>
          Foto: {photo.credit} ·{" "}
          <a href={photo.source} target="_blank" rel="noreferrer" className={styles.creditLink}>
            {photo.license}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
