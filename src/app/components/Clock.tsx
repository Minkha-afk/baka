import styles from "./Clock.module.css";

/** Decorative analog clock (CSS-animated) — from Uiverse.io by escannord. */
export default function Clock() {
  return (
    <div className={styles.card} role="img" aria-label="Analog clock">
      <div className={styles.numbers}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={styles.number} />
        ))}
      </div>
      <div className={styles.needles}>
        <span className={styles.h} />
        <span className={styles.m} />
        <span className={styles.s} />
        <span className={styles.center} />
      </div>
    </div>
  );
}
