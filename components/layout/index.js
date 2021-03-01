import Head from "next/head";

import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Star Wars App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Powered by
        <a
          className={styles["footer-logo"]}
          href="https://swapi.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          SWAPI
        </a>
      </footer>
    </div>
  );
};

export default Layout;
