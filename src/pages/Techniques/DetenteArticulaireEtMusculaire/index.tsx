import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import SectionTitle from '../../../components/SectionTitle';
import PageTitle from '../../../components/PageTitle';
import sample1 from '../../../assets/sample-detente1.jpg';
import styles from './styles.module.scss';

const DetenteArticulaireEtMusculaire = (): ReactElement => {
  return (
    <div className={styles.page}>
      <PageTitle text="Détente articulaire et musculaire" />
      <Divider />
      <SectionTitle text="En quoi consiste cette méthode ?" />
      <p>
        La technique de détente musculaire et articulaire est une méthode douce
        pour retrouver l’équilibre et la liberté du mouvement de la globalité de
        votre corps.
      </p>
      <Divider />
      <SectionTitle text="Quels en sont ses bénéfices ?" />
      <p>
        Cette approche globale du corps en prévention et en entretien permet
        d’améliorer votre qualité de vie quel que soit votre âge (enfant,
        adolescent, adulte et senior).
      </p>
      <br />
      <p className={styles.definition}>
        Le practicien, peut être amené, en fonction de ce que votre corps lui
        apprend, à vous conseiller sur l’importance d’une hygiène de vie adaptée
        à la gestion de vos troubles.
      </p>
      <div className={styles.list}>
        <div>
          <img src={sample1} alt="Réflexologie" />
        </div>
        <ul>
          <li>Libère les points de tensions</li>
          <li>Améliore la mobilité du corps</li>
          <li>Soulage les douleurs</li>
          <li>Rééquilibre l’espace du corps</li>
        </ul>
      </div>
    </div>
  );
};

DetenteArticulaireEtMusculaire.propTypes = {};

export default DetenteArticulaireEtMusculaire;
