import React, { ReactElement } from 'react';
import { string, InferProps } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './styles.module.scss';

const ExpertiseCard = ({
  img,
  title,
  subtitle,
  bodyText,
  to,
}: Props): ReactElement => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Link to={`/techniques${to}`}>
          <img src={img} alt={title} />
          <div className={styles.border} />
        </Link>
      </div>
      <div className={styles['text-wrapper']}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.text}>{bodyText}</p>
        <Button to={`/techniques${to}`}>Voir plus de détails</Button>
      </div>
    </div>
  );
};

const propTypes = {
  title: string.isRequired,
  subtitle: string,
  bodyText: string.isRequired,
  img: string.isRequired,
  to: string.isRequired,
};

type Props = InferProps<typeof propTypes>;

ExpertiseCard.propTypes = propTypes;

export default ExpertiseCard;
