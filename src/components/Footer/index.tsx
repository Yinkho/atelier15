import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logoGoogle from '../../assets/logo-google.png';
import styles from './styles.module.scss';

const Footer = (): ReactElement => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.section}>
          <p className={styles.title}>Contactez-nous</p>
          <p>
            Dominique TALLEUX
            <br />
            06 32 65 67 31
            <br />
            <p>dominiquetalleux@icloud.fr</p>
          </p>
          <br />
          <p>
            Anne ZAKKA
            <br />
            07 62 12 41 63
            <br />
            <p>annezakkalenouy@gmail.com</p>
          </p>
          <br />
          <p>
            Béatrice GAU
            <br />
            06 32 95 49 04
          </p>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>Accès</p>
          <p>15 rue Sainte-Hippolyte</p>
          <p>75013, Paris</p>
          <br />
          <p>Métro ligne 7, Les Gobelins</p>
          <p>Métro ligne 6, Glacière</p>
          <br />
          <p>Bus 21, Port Royal - Berthollet</p>
          <p>Bus 59, Place d'Italie</p>
          <p>Bus 91, Montparnasse</p>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>Retrouvez-nous également sur :</p>
          <a
            href="https://g.page/r/CQtE09fklYPMEAE"
            target="_blank"
            className={styles.social}
          >
            <img src={logoGoogle} alt="Google" />
            <p>Donnez-nous votre avis !</p>
          </a>
        </div>
      </div>
      <Link className={styles['mentions-legales']} to="/mentions-legales">
        Mentions légales
      </Link>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
