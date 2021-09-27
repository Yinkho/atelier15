import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import SectionTitle from '../../../components/SectionTitle';
import logoAnne from '../../../assets/logo-anne.jpg';
import sampleAnne1 from '../../../assets/sample-anne1.jpg';
import logoEnglish from '../../../assets/logo-english.png';
import styles from './styles.module.scss';

const AnneZakka = (): ReactElement => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img src={logoAnne} alt="Anne Zakka" />
        <div>
          <h1>Anne ZAKKA</h1>
          <h2>Réflexologue</h2>
        </div>
      </div>
      <Divider />
      <SectionTitle text="À propos de moi" />
      <p>
        Je mets à votre disposition mon expertise en réflexologie, vous
        souhaitez retrouver la liberté de vos mouvements, libérer les blocages
        de votre corps : j’œuvre grâce à plusieurs techniques pour libérer les
        faux plis et la mémoire des mouvements de votre corps.
        <br />
        <br />
        La réflexologie vous apporte des résultats physiques et émotionnels :
        <br />- physiquement, elle soulagera vos tensions musculaires et
        augmentera votre énergie,
        <br />- émotionnellement, elle favorisera calme et bien-être.
        <br />
        <br />
        La thérapie d’équilibre et libération du corps vous fera retrouver une
        liberté du mouvement et le chemin du mieux être. Je pratique également
        le Gua Sha, une méthode de soin afin de détendre, tonifier et raffermir
        votre visage et votre corps.
      </p>
      <Divider />
      <SectionTitle text="Pour qui et pour quoi ?" />
      <div className={styles['pour-qui-et-pour-quoi']}>
        <img src={sampleAnne1} alt="Réflexologie" />
        <div>
          <p>
            Je prends en charge&nbsp;
            <b>
              du nourrisson au séniors pour tous les maux.
              <br />
              <br />
              Tous les systèmes du corps sont inclus :
            </b>
            <br />
            <br />
          </p>
          <ul>
            <li>
              Musculo squelettique / Lumbago tendinites névralgies fibromyalgies
            </li>
            <li>Viscérales</li>
            <li>Névralgie</li>
            <li>Canal carpien</li>
          </ul>
          <p>
            <br />
            <br />
            <b>Objectifs :</b>
            <br />
            <br />
          </p>
          <ul>
            <li>Améliorer et libérer le corps de tous les maux</li>
            <li>Soulager et réduire les douleurs</li>
          </ul>
          <p>
            <br />
            <br />
            Toutes les techniques sont destinées à favoriser la détente,
            <br />
            l’harmonisation et le bien-être. Il ne s’agit pas de techniques
            médicales.
          </p>
        </div>
      </div>
      <Divider />
      <SectionTitle text="Consultations et tarifs" />
      <p>
        Les consultations se font{' '}
        <b>
          sur rendez-vous.
          <br />
          <br />
          Durée :
        </b>
        <br />
        <br />
        <b>1 heure</b> (prévoir plus d’une heure pour la première séance)
        <br />
        <br />
        <b>Tarifs :</b>
        <br />
        <br />
        <b>70 €</b> séance classique
        <br />
        <b>40 €</b> séance d'entretien
        <br />
        <b>25 €</b> séance détente
        <br />
        <br />
        <b>40 €</b> pour les mineurs et enfants
        <br />
        <br />
        Un forfait réduit est adapté pour un suivi régulier.
        <br />
        Moyens de paiements en <b>chèque</b> ou en <b>espèces</b>.<br />
        <br />
        <b>Remboursement :</b>
        <br />
        <br />
        Les factures établies à chaque séance peuvent être pris en charge par
        certaines mutuelles partiellement ou entièrement.
      </p>
      <div className={styles['english-spoken']}>
        <img src={logoEnglish} alt="English spoken" />
        <p>English spoken</p>
      </div>
    </div>
  );
};

AnneZakka.propTypes = {};

export default AnneZakka;
