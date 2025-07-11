import styles from "./Education.module.css";

const Education = () => (
  <section className={styles.section}>
    <h2>Education</h2>
    <div className={styles.educationGrid}>
      <div className={styles.educationCard}>
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p><strong>Tezpur University</strong></p>
        <p>2024 - 2028</p>
      </div>
      <div className={styles.educationCard}>
        <h3>Higher Secondary Education</h3>
        <p><strong>Maharishi Vidya Mandir-Silpukhuri</strong></p>
        <p>2021 - 2022</p>
      </div>
    </div>
  </section>
);

export default Education; 