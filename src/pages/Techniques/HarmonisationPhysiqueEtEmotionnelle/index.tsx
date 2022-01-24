import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import SectionTitle from '../../../components/SectionTitle';
import PageTitle from '../../../components/PageTitle';
import sample1 from '../../../assets/sample-harmonisation1.jpg';
import styles from './styles.module.scss';

const HarmonisationPhysiqueEtEmotionnelle = (): ReactElement => {
  return (
    <div className={styles.page}>
      <PageTitle text="Harmonisation physique et émotionnelle" />
      <Divider />
      <SectionTitle text="En quoi consiste cette méthode ?" />
      <p>
        Méthode issue de l’expérience du docteur Thérèse Quillé qui, constatant
        que dans beaucoup de cas, les maladies ou symptômes sont souvent le
        résultat d’un déséquilibre physique, émotionnel ou spirituel (des
        perturbations de la pensée et de l’esprit), a créé cette méthode, en
        impliquant le consultant dans le processus de traitement pour se libérer
        de l’origine des troubles, permet au corps de réagir en effaçant les
        cicatrices et de devenir plus sensibles aux thérapies employées.
        <br />
        <br />
        Basée sur le test de résistance musculaire, elle permet de cerner
        rapidement les perturbations ressenties par votre corps, les résultats à
        l’issue de 1 à 3 séances sont étonnants.
      </p>
      <Divider />
      <SectionTitle text="Quels en sont ses bénéfices ?" />
      <p>
        L’harmonisation physique et émotionnelle est une méthode simple, souvent
        rapide et efficace qui permet de :
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
          <li>Faire disparaître vos peurs, vos phobies, vos blocages</li>
          <li>Diminuer, voire supprimer vos allergies</li>
          <li>Vous aider à mieux gérer vos problèmes émotionnels</li>
          <li>Soulager des douleurs récurrentes parfois inexpliquées</li>
          <li>Aider les enfants dans leurs apprentissages scolaires</li>
          <li>
            Ramener le corps et l’esprit à l’équilibre, restaurer l'harmonie
          </li>
          <li>
            Rechercher et traiter les cicatrices des traumatismes physiques,
            émotionnels ou héréditaires
          </li>
          <li>Et de nombreuses autres applications insoupçonnées...</li>
        </ul>
      </div>
    </div>
  );
};

HarmonisationPhysiqueEtEmotionnelle.propTypes = {};

export default HarmonisationPhysiqueEtEmotionnelle;
