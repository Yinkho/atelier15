import React, { ReactElement, useState } from 'react';
import { bool, func, InferProps } from 'prop-types';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import cx from 'classnames';
import Button from '../Button';
import styles from './styles.module.scss';

const Navbar = ({ isMenuOpened, toggleMenuOpen }: Props): ReactElement => {
  const getRouteMatch = (route: string): boolean =>
    useLocation().pathname.includes(route);

  return (
    <>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink
              onClick={(e) => e.stopPropagation()}
              className={styles.navlink}
              activeClassName={styles['active-link']}
              exact
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={(e) => e.stopPropagation()}
              className={styles.navlink}
              activeClassName={styles['active-link']}
              to="/atelier15"
            >
              L'Atelier 15
            </NavLink>
          </li>
          <li>
            <div
              className={cx(
                styles.navlink,
                getRouteMatch('techniques') && styles['active-link']
              )}
            >
              Nos Techniques
              <div className={styles.sublink}>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/techniques/reflexologie"
                >
                  Réflexologie
                </NavLink>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/techniques/methode-jmv"
                >
                  Méthode JMV
                </NavLink>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/techniques/harmonisation-physique-et-emotionnelle"
                >
                  Harmonisation physique et émotionnelle
                </NavLink>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/techniques/detente-articulaire-et-musculaire"
                >
                  Détente articulaire et musculaire
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <div
              className={cx(
                styles.navlink,
                getRouteMatch('professionnels') && styles['active-link']
              )}
            >
              Nos Professionnels
              <div className={styles.sublink}>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/professionnels/dominique-talleux"
                >
                  Dominique TALLEUX
                </NavLink>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/professionnels/anne-zakka"
                >
                  Anne ZAKKA
                </NavLink>
                <NavLink
                  onClick={(e) => e.stopPropagation()}
                  activeClassName={styles['active-sublink']}
                  to="/professionnels/beatrice-gau"
                >
                  Béatrice Gau
                </NavLink>
              </div>
            </div>
          </li>
          {/* <Button>Réserver une séance</Button> */}
        </ul>
      </nav>

      <div className={styles['menu-mobile']}>
        <div
          className={styles['menu-mobile-header']}
          onClick={() => toggleMenuOpen(!isMenuOpened)}
        >
          <p>Menu</p>
          <div className={cx(styles.hamburger, isMenuOpened && styles.active)}>
            <span />
          </div>
        </div>
        <div
          className={cx(
            styles['menu-mobile-overlay'],
            isMenuOpened && styles.active
          )}
        >
          <li>
            <NavLink
              onClick={(e) => {
                e.stopPropagation();
                toggleMenuOpen(false);
              }}
              className={styles.navlink}
              activeClassName={styles['active-link-mobile']}
              exact
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={(e) => {
                e.stopPropagation();
                toggleMenuOpen(false);
              }}
              className={styles.navlink}
              activeClassName={styles['active-link-mobile']}
              to="/atelier15"
            >
              L'Atelier 15
            </NavLink>
          </li>
          <li>
            <div
              onClick={(e) => e.stopPropagation()}
              className={cx(
                styles.navlink,
                getRouteMatch('techniques') && styles['active-link-mobile']
              )}
            >
              Nos Techniques
            </div>
            <div className={cx(styles['sublink-mobile'], styles.techniques)}>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/techniques/reflexologie"
              >
                Réflexologie
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/techniques/methode-jmv"
              >
                Méthode JMV
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/techniques/harmonisation-physique-et-emotionnelle"
              >
                Harmonisation physique et émotionnelle
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/techniques/detente-articulaire-et-musculaire"
              >
                Détente articulaire et musculaire
              </NavLink>
            </div>
          </li>
          <li>
            <div
              onClick={(e) => e.stopPropagation()}
              className={cx(
                styles.navlink,
                getRouteMatch('professionnels') && styles['active-link-mobile']
              )}
            >
              Nos Professionnels
            </div>
            <div className={cx(styles['sublink-mobile'], styles.professionals)}>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/professionnels/dominique-talleux"
              >
                Dominique TALLEUX
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/professionnels/anne-zakka"
              >
                Anne ZAKKA
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenuOpen(false);
                }}
                activeClassName={styles['active-link-mobile']}
                to="/professionnels/beatrice-gau"
              >
                Béatrice GAU
              </NavLink>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

const propTypes = {
  isMenuOpened: bool.isRequired,
  toggleMenuOpen: func.isRequired,
};

type Props = InferProps<typeof propTypes>;

Navbar.propTypes = propTypes;

export default Navbar;
