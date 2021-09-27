import React, { ReactElement } from 'react';
import cx from 'classnames';
import { string, InferProps } from 'prop-types';
import styles from './styles.module.scss';

const PageTitle = ({ className, text }: Props): ReactElement => {
  return <h2 className={cx(className, styles.title)}>{text}</h2>;
};

const propTypes = {
  className: string,
  text: string.isRequired,
};

type Props = InferProps<typeof propTypes>;

PageTitle.propTypes = {
  className: string,
  text: string.isRequired,
};

export default PageTitle;
