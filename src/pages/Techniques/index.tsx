import React, { ReactElement } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Reflexologie from './Reflexologie';
import MethodeJMV from './MethodeJMV';
import HarmonisationPhysiqueEtEmotionnelle from './HarmonisationPhysiqueEtEmotionnelle';
import DetenteArticulaireEtMusculaire from './DetenteArticulaireEtMusculaire';
import styles from './styles.module.scss';

const Techniques = (): ReactElement => {
  const { technique } = useParams<{ technique: string }>();

  switch (technique) {
    case 'reflexologie':
      return <Reflexologie />;
    case 'methode-jmv':
      return <MethodeJMV />;
    case 'harmonisation-physique-et-emotionnelle':
      return <HarmonisationPhysiqueEtEmotionnelle />;
    case 'detente-articulaire-et-musculaire':
      return <DetenteArticulaireEtMusculaire />;
    default:
      return <Redirect to="/" />;
  }
};

Techniques.propTypes = {};

export default Techniques;
