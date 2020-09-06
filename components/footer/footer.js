import styles from "./footer.module.css";

const Footer = () => {
  return (
    // Next's footer
    <footer className={styles.footer}>
      © {new Date().getFullYear()} NextHub Powered by{" "}
      <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    </footer>
  );
};

export default Footer;
