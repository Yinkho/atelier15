import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.module.scss';

const MentionsLegales = (): ReactElement => {
  return (
    <div>
      <SectionTitle text="Mentions légales" />
    </div>
  );
};

MentionsLegales.propTypes = {};

export default MentionsLegales;
