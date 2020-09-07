import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    // Next's footer
    <footer className={styles.footer}>
      <Link href="/about">
        <a>
          {`© ${new Date().getFullYear()}`}
          <span className="font-weight-bold mx-1">NextHub</span>
          {` Powered by `}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
