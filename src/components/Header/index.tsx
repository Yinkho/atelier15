import React, { useState, ReactElement } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import logo from '../../assets/logo-atelier15.png';
import styles from './styles.module.scss';

const Header = (): ReactElement => {
  const [isMenuOpened, toggleMenuOpen] = useState<boolean>(false);

  return (
    <div className={cx(styles.header, isMenuOpened && styles.fixed)}>
      <Link to="/" onClick={() => toggleMenuOpen(false)}>
        <img src={logo} alt="Atelier 15" />
      </Link>
      <Navbar {...{ isMenuOpened, toggleMenuOpen }} />
    </div>
  );
};

Header.propTypes = {};

export default Header;
