import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      @Copy right {year} by WorldWise Inc.
    </footer>
  );
}

export default Footer;
