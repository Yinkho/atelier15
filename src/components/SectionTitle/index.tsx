import React, { ReactElement } from 'react';
import { string, InferProps } from 'prop-types';
import styles from './styles.module.scss';

const SectionTitle = ({ text }: Props): ReactElement => {
  return <h2 className={styles.section}>{text}</h2>;
};

const propTypes = {
  text: string.isRequired,
};

type Props = InferProps<typeof propTypes>;

SectionTitle.propTypes = {
  text: string.isRequired,
};

export default SectionTitle;
