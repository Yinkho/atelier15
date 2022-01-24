import React, { ReactElement } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnneZakka from './AnneZakka';
import DominiqueTalleux from './DominiqueTalleux';
import BeatriceGau from './BeatriceGau';
import styles from './styles.module.scss';

const Professionals = (): ReactElement => {
  const { professional } = useParams<{ professional: string }>();

  switch (professional) {
    case 'dominique-talleux':
      return <DominiqueTalleux />;
    case 'beatrice-gau':
      return <BeatriceGau />;
    case 'anne-zakka':
      return <AnneZakka />;
    default:
      return <Redirect to="/" />;
  }
};

Professionals.propTypes = {};

export default Professionals;
