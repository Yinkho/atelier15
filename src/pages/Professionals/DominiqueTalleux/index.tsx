import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import SectionTitle from '../../../components/SectionTitle';
import logo from '../../../assets/logo-light.svg';
import styles from './styles.module.scss';

const DominiqueTalleux = (): ReactElement => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img src={logo} alt="Anne Zakka" />
        <div>
          <h1>Dominique TALLEUX</h1>
          <h2>Réflexologue</h2>
          <br />
          <p>dominiquetalleux@icloud.fr</p>
          <p>06&nbsp;32&nbsp;65&nbsp;67&nbsp;31</p>
        </div>
      </div>
      <Divider />
      <SectionTitle text="À propos de moi" />
      <p>
        Après une formation longue en réflexologie intégrale DIEN CHAN les
        demandes qui ont suivies m’ont incitées à effectuer des formations
        complémentaires ciblées pour répondre au mieux à vos besoins.
        <br />
        <br />
        Certificat professionnel de Réflexologue
        <br />
        Niveau 6 / Niveau 2 (Fr)
        <br />
        Code NFS :330 t
        <br />
        <br />
        <br />
        <br />
        <i>
          <span className={styles.technique}>La réflexologie :</span>
        </i>
        <br />
        <br />
        Par une approche globale du corps, elle lui apporte un soulagement une
        détente lui permettant d’enclencher ses pouvoirs d’auto-régulation pour
        apaiser et mieux gérer les effets et conséquences du stress.(digestion,
        contractures sommeil, …).
        <br />
        <br />
        <i>
          <span className={styles.technique}>La méthode JMV :</span>
        </i>
        <br />
        <br />
        Permet de rechercher les causes physiques de maux récurrents qui
        surviennent et persistent sans raison apparente et pouvant être dus à
        des intolérances alimentaires, médicamenteuses, environnementales
        (ondes, wi-fi, pollution…), allergies insoupçonnées : d’en effacer les
        mémoires et en supprimer les conséquences.
        <br />
        <br />
        <i>
          <span className={styles.technique}>
            L’harmonisation physique et émotionnelle :
          </span>
        </i>
        <br />
        <br />
        Permet, grâce à la recherche des causes psychiques, un travail de fond
        pour supprimer l’impact d’événements traumatiques (physiques ou
        émotionnels, transgénérationnels …) portés, subis ou transmis, en
        conserver le souvenir mais en effacer les perturbations.
      </p>
      <Divider />
      <SectionTitle text="Pour qui et pour quoi ?" />
      <div className={styles['pour-qui-et-pour-quoi']}>
        {/* <img src={sampleAnne1} alt="Réflexologie" /> */}
        <div>
          <p>
            Pour tous, du plus jeune au plus âgé.
            <br />
            <br />
            Selon vos besoins : nous définirons ensemble la pratique la plus
            adapté pour les soulager.
            <br />
            <br />
            <i>
              Je n’interviens pas sur vos traitements médicaux qui relèvent de
              l’avis de votre médecin traitant.{' '}
            </i>
          </p>
        </div>
      </div>
      <Divider />
      <SectionTitle text="Consultations et tarifs" />
      <p>
        <b>70 €</b> la séance classique
        <br />
        <b>40 €</b> la séance d’entretien
        <br />
        <b>25 €</b> la séance détente
        <br />
        <br />
        Un forfait trois séances existe permettant une réduction globale.
        <br />
        <br />
        Règlement en espèces, chèque, Lydia.
        <br />
        <br />
        La facture établie pour la séance peut-être prise en charge au titre des
        « médecines douces » par certaines complémentaires, vous renseigner
        auprès de votre mutuelle.
      </p>
    </div>
  );
};

DominiqueTalleux.propTypes = {};

export default DominiqueTalleux;
