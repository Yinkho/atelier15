import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.module.scss';

const MentionsLegales = (): ReactElement => {
  return (
    <div>
      <SectionTitle text="Mentions légales" />
      <br />
      <p>
        Les photos présentées sont des photos libres de droits, disponibles à la
        vente sur la photothèque en ligne www.unsplash.com ou www.pexels.com.
        Toute reproduction est interdite.
      </p>
      <br />
      <br />
      <p>
        Dominique TALLEUX
        <br />
        Siren: 492 959 044
      </p>
      <br />
      <br />
      <p>
        Anne ZAKKA
        <br />
        Siren: 877 710 111
      </p>
      <br />
      <br />
      <p>
        Béatrice GAU
        <br />
        Siren: 903 825 008
      </p>
      <br />
      <br />
      <p>15 rue Sainte-Hippolyte 75013, Paris</p>
    </div>
  );
};

MentionsLegales.propTypes = {};

export default MentionsLegales;
