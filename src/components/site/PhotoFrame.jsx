import styles from "./PhotoFrame.module.css";
import { useState } from "react";
import { licenseUrl } from "@/content/data";
import { cn } from "@/lib/utils";
/** Real photograph with credit line and an elegant typographic fallback if loading fails. */
export function PhotoFrame({
  photo,
  className,
  imgClassName,
  showCredit = true,
  eager,
  decorative = false,
  ...figureProps
}) {
  const [failed, setFailed] = useState(false);
  return (
    <figure {...figureProps} className={cn(styles.frame, className)}>
      {failed || !photo.src ? (
        <div
          className={styles.fallback}
          role={decorative ? undefined : "img"}
          aria-label={decorative ? undefined : photo.alt}
        >
          <p className={styles.fallbackEyebrow}>
            {photo.src ? "Fotografia indisponível" : "Memória e dignidade"}
          </p>
          <p className={styles.fallbackLabel}>{photo.name || photo.alt}</p>
          <p className={styles.fallbackNote}>{photo.pending || "A história continua no texto."}</p>
        </div>
      ) : (
        <img
          src={photo.src}
          alt={decorative ? "" : photo.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          style={{ objectPosition: photo.position }}
          className={cn(styles.image, imgClassName)}
        />
      )}
      {showCredit && photo.src && (
        <figcaption className={styles.credit}>
          Foto: {photo.credit} ·{" "}
          <a href={photo.source} target="_blank" rel="noreferrer" className={styles.creditLink}>
            Fonte
          </a>
          {" · "}
          {photo.license ? (
            <a
              href={licenseUrl(photo.license)}
              target="_blank"
              rel="noreferrer"
              className={styles.creditLink}
            >
              {photo.license}
            </a>
          ) : (
            <span>{photo.rights}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
