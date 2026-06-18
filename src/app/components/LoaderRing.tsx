import styles from "./Loader.module.css";

/** Inline decorative spinning ring (Uiverse.io by Praashoo7) — no overlay. */
export default function LoaderRing() {
  const tubes = Array.from({ length: 9 });
  return (
    <div className={styles.ring} aria-hidden="true">
      <div className={styles.main}>
        <div className={styles.loaders}>
          {tubes.map((_, i) => (
            <div key={i} className={styles.loader} />
          ))}
        </div>
        <div className={styles.loadersB}>
          {tubes.map((_, i) => (
            <div key={i} className={styles.loaderA}>
              <div className={styles[`ball${i}` as keyof typeof styles]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
