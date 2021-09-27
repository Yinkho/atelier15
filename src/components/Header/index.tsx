import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import logo from '../../assets/logo-atelier15.png';
import styles from './styles.module.scss';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Atelier 15" />
      </Link>
      <Navbar />
    </div>
  );
};

Header.propTypes = {};

export default Header;
