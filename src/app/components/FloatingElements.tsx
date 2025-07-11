import styles from "./FloatingElements.module.css";

const FloatingElements = () => (
  <div className={styles.floatingElements}>
    <div className={styles.floatShape + " " + styles.shape1}></div>
    <div className={styles.floatShape + " " + styles.shape2}></div>
    <div className={styles.floatShape + " " + styles.shape3}></div>
    <div className={styles.floatShape + " " + styles.shape4}></div>
    <div className={styles.floatShape + " " + styles.shape5}></div>
  </div>
);

export default FloatingElements; 