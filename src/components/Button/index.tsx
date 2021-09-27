import React, { ReactElement } from 'react';
import cx from 'classnames';
import { node, string, oneOfType, InferProps, func } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Button = ({
  children,
  className,
  variant,
  to,
  onClick,
}: Props): ReactElement => {
  return (
    <Link className={cx(className, styles.component)} to={to || '/'}>
      <button
        className={cx(styles.button, variant === 'large' && styles.large)}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

const propTypes = {
  children: oneOfType([string, node]).isRequired,
  variant: string,
  to: string,
  className: string,
  onClick: func,
};

type Props = InferProps<typeof propTypes>;

Button.propTypes = propTypes;

export default Button;
