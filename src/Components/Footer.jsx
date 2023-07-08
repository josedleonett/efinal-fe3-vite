import React, { useContext } from 'react';
import styles from "../style/Footer.module.css";
import { ContextGlobal } from './utils/global.context';
import { FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className={`${styles.footer} ${styles[state.theme]}`}>
      <button className={styles.buttonScrollTop} onClick={scrollToTop}>
        <FaChevronUp />
        <p>VOLVER AL PRINCIPIO</p>
      </button>

      <div className={styles.footerContent}>
        <div className={styles.dhLogoContainer}>
          <p>Powered by</p>
          <img className={styles.dhLogo} src="/images/DH.png" alt="DH-logo" />
        </div>

        <div className={styles.socialIcons}>
          <img src="/images/ico-facebook.png" alt="FB-logo" />
          <img src="/images/ico-instagram.png" alt="IG-logo" />
          <img src="/images/ico-tiktok.png" alt="TKT-logo" />
          <img src="/images/ico-whatsapp.png" alt="WS-logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
