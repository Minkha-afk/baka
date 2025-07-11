import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.name}>MINHAZUL ISLAM CHOUDHURY</h1>
    <p className={styles.title}>FULL STACK DEVELOPER</p>
    <div className={styles.contactInfo}>
      <div className={styles.contactItem}>
        <span>📧</span>
        <span>minhazulichoudhury@gmail.com</span>
      </div>
      <div className={styles.contactItem}>
        <span>📱</span>
        <span>84532-44745</span>
      </div>
      <div className={styles.contactItem}>
        <span>📍</span>
        <span>Dispur, Guwahati, India</span>
      </div>
    </div>
  </header>
);

export default Header; 