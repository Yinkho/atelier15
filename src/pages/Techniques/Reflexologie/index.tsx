import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import SectionTitle from '../../../components/SectionTitle';
import PageTitle from '../../../components/PageTitle';
import sample1 from '../../../assets/sample-reflexologie1.jpg';
import styles from './styles.module.scss';

const Reflexologie = (): ReactElement => {
  return (
    <div className={styles.page}>
      <PageTitle text="Réflexologie" />
      <Divider />
      <SectionTitle text="En quoi consiste cette méthode ?" />
      <p>
        La réflexologie est une méthode naturelle de prévention, d’entretien et
        de soin du fonctionnement global de votre corps. Elle consiste à exercer
        des pressions sur des zones très précises du visage, des mains et pieds
        appelées zones réflexes. Celles-ci sont en correspondance avec les
        différents systèmes organiques (respiratoire, digestif, circulatoire,
        nerveux) de votre corps par l’intermédiaire des terminaisons nerveuses
        de la peau.
        <br />
        <br />
        Avec des instruments les doigts (digito-pression ou digipuncture). Le
        praticien, professionnel du toucher réflexe va, dans une relation
        d’accompagnement, travailler à la dissipation des tensions, favoriser la
        relaxation, relancer le fonctionnement des systèmes, stimuler les
        capacités d’autorégulation de votre organisme afin de rétablir son
        équilibre...
      </p>
      <Divider />
      <SectionTitle text="Quels en sont ses bénéfices ?" />
      <p>
        Cette approche globale du corps en prévention et en entretien permet
        d’améliorer votre qualité de vie quel que soit votre âge (enfant,
        adolescent, adulte et senior).
        <br />
        Le réflexologue, peut être amené́ , en fonction de ce que votre corps lui
        apprend, à vous conseiller sur l’importance d’une hygiène de vie adaptée
        à la gestion de vos troubles.
      </p>
      <div className={styles.list}>
        <div>
          <img src={sample1} alt="Réflexologie" />
        </div>
        <ul>
          <li>Gérer le stress</li>
          <li>Apaiser les tensions nerveuses et musculaires</li>
          <li>Soulager vos douleurs</li>
          <li>
            Améliorer votre circulation lymphatique, sanguine, votre
            respiration, votre digestion
          </li>
          <li>Renforcer votre système immunitaire</li>
          <li>Réguler vos dysfonctionnements chroniques</li>
        </ul>
      </div>
    </div>
  );
};

Reflexologie.propTypes = {};

export default Reflexologie;
