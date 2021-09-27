import React, { ReactElement } from 'react';
import ImageGallery from 'react-image-gallery';
import PageTitle from '../../components/PageTitle';
import sample1 from '../../assets/sample-place1.jpg';
import sample2 from '../../assets/sample-place2.jpg';
import sample3 from '../../assets/sample-place3.jpg';
import sample4 from '../../assets/sample-place4.jpg';
import sample5 from '../../assets/sample-place5.jpg';
import PropTypes from 'prop-types';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './styles.module.scss';

const images = [
  {
    original: sample1,
    thumbnail: sample1,
  },
  {
    original: sample2,
    thumbnail: sample2,
  },
  {
    original: sample3,
    thumbnail: sample3,
  },
  {
    original: sample4,
    thumbnail: sample4,
  },
  {
    original: sample5,
    thumbnail: sample5,
  },
];

const Atelier15 = (): ReactElement => {
  return (
    <div>
      <PageTitle className={styles.title} text="L' Atelier 15" />
      <ImageGallery items={images} />
    </div>
  );
};

Atelier15.propTypes = {};

export default Atelier15;
