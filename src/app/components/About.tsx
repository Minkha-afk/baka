import styles from "./About.module.css";

const About = () => (
  <section className={styles.section}>
    <h2>About Me</h2>
    <p className={styles.aboutText}>
      Full-stack developer with a strong foundation in both frontend and backend technologies. 
      I build fast, responsive user interfaces using React, Next.js, and animation libraries like 
      GSAP and Framer Motion. On the backend, I specialize in building scalable APIs with Node.js, 
      Express.js, and GraphQL, and work confidently with databases like MongoDB and PostgreSQL. 
      I enjoy bringing ideas to life through clean code, intuitive UX, and efficient server-side logic. 
      Always learning, I aim to create web experiences that are both powerful and user-friendly.
    </p>
  </section>
);

export default About; 