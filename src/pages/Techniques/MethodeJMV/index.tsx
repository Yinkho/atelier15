import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import SectionTitle from '../../../components/SectionTitle';
import PageTitle from '../../../components/PageTitle';
import sample1 from '../../../assets/sample-reflexologie1.jpg';
import styles from './styles.module.scss';

const MethodeJMV = (): ReactElement => {
  return (
    <div className={styles.page}>
      <PageTitle text="Méthode JMV" />
      <Divider />
      <SectionTitle text="En quoi consiste cette méthode ?" />
      <p>
        La méthode JMV est une technique qui aide le corps et l'esprit à
        s’auto-réguler Elle fait appel à plusieurs techniques telles que l'EMDR
        (mouvements oculaires), la digipuncture sur des trajets des méridiens de
        la médecine chinoise et les tests neuromusculaires.
      </p>
      <Divider />
      <SectionTitle text="Quels en sont ses bénéfices ?" />
      <p>
        La méthode JMV permet de trouver les causes d’un dysfonctionnement dû
        aux intolérances et d'en corriger les perturbations physiques, mentales
        ou émotionnelles afin de permettre à votre l’organisme de s’auto-réguler
        et faire disparaitre les conséquences de ces intolérances :
      </p>
      <br />
      <p className={styles.definition}>
        Le réflexologue, peut être amené, en fonction de ce que votre corps lui
        apprend, à vous conseiller sur l’importance d’une hygiène de vie adaptée
        à la gestion de vos troubles.
      </p>
      <div className={styles.list}>
        <div>
          <img src={sample1} alt="Réflexologie" />
        </div>
        <div>
          <p>Lors d'une séance, nous allons ensemble :</p>
          <ul>
            <li>Tester et harmoniser votre équilibre énergétique</li>
            <li>
              Contrôler la libre circulation des méridiens de circulation des
              énergies en médecine chinoise et ôter les blocages
            </li>
            <li>
              Déceler des intolérances et les déprogrammer : alimentaires,
              troubles métaboliques métaux lourds wifi, allergies (entre autres)
              ou selon votre besoins les dépendances et addictions (tabac,
              sucre…)
            </li>
          </ul>
          <p>
            La séance dure <b>entre 1h et 1h 15.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

MethodeJMV.propTypes = {};

export default MethodeJMV;
