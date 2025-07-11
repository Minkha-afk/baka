import styles from "./Experience.module.css";

const Experience = () => (
  <section className={styles.section}>
    <h2>Experience</h2>
    <div className={styles.experienceItem}>
      <div className={styles.experienceTitle}>Full Stack Developer Intern</div>
      <div className={styles.experienceCompany}>Vrixaalabs Ltd</div>
      <div className={styles.experienceDate}>2025 - Present</div>
      <p>
        Developed and maintained full-stack web applications using React, Next.js, Node.js, and GraphQL. 
        Built responsive user interfaces and integrated APIs for dynamic data handling. Designed and 
        implemented scalable backend services with Express.js, and managed data using MongoDB and PostgreSQL. 
        Collaborated closely with frontend teams, handled secure authentication with JWT/OAuth, and deployed 
        applications using Git, Vercel, and Docker.
      </p>
    </div>
  </section>
);

export default Experience; 