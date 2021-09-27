import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
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
          </p>
          <br />
          <p>
            Anne ZAKKA
            <br />
            07 62 12 41 63
          </p>
          <br />
          <p>contact@atelier15.fr</p>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>Accès</p>
          <p>15 rue Sainte-Hippolyte</p>
          <p>75013, Paris</p>
          <br />
          <p>Métro Les Gobelins, ligne 7</p>
          <p>Métro Glacière, ligne 6</p>
        </div>
        {/* <div className={styles.section}>
          <p className={styles.title}>Retrouvez-nous !</p>
          <p>75002, Paris</p>
          <p>Métro République, ligne 7</p>
        </div> */}
      </div>
      <Link className={styles['mentions-legales']} to="/mentions-legales">
        Mentions légales
      </Link>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
