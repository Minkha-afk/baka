import styles from "./Skills.module.css";

const skills = [
  { icon: "⚛️", title: "React & Next.js", desc: "Modern frontend frameworks" },
  { icon: "🟢", title: "Node.js", desc: "Server-side JavaScript" },
  { icon: "🔷", title: "GraphQL", desc: "API query language" },
  { icon: "🍃", title: "MongoDB", desc: "NoSQL database" },
  { icon: "🐘", title: "PostgreSQL", desc: "Relational database" },
  { icon: "🌐", title: "Three.js", desc: "3D web graphics" },
  { icon: "💻", title: "C Programming", desc: "System programming" },
  { icon: "🔧", title: "Problem Solving", desc: "Analytical thinking" },
];

const Skills = () => (
  <section className={styles.section}>
    <h2>Technical Skills</h2>
    <div className={styles.skillsGrid}>
      {skills.map((skill) => (
        <div className={styles.skillCard} key={skill.title}>
          <div className={styles.skillIcon}>{skill.icon}</div>
          <h3>{skill.title}</h3>
          <p>{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 