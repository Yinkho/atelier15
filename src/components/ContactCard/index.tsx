import React, { ReactElement } from 'react';
import { string, arrayOf, InferProps } from 'prop-types';
import Button from '../Button';
import phoneIcon from '../../assets/phone-icon.svg';
import styles from './styles.module.scss';

const ContactCard = ({
  fullName,
  phoneNumber,
  expertises,
  to,
}: Props): ReactElement => {
  return (
    <div className={styles.card}>
      <p className={styles['full-name']}>{fullName}</p>
      <div className={styles['phone-number']}>
        <img src={phoneIcon} alt={`Numéro de téléphone de ${fullName}`} />
        <p>{phoneNumber}</p>
      </div>
      {expertises.map((expertise) => (
        <p className={styles.expertise}>{expertise}</p>
      ))}
      <Button className={styles.button} to={to}>
        Voir les horaires et les tarifs{' '}
      </Button>
    </div>
  );
};

const propTypes = {
  fullName: string.isRequired,
  phoneNumber: string.isRequired,
  expertises: arrayOf(string).isRequired,
  to: string.isRequired,
};

type Props = InferProps<typeof propTypes>;

ContactCard.propTypes = propTypes;

export default ContactCard;
