import React from 'react';
import { func, arrayOf, object } from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ hits, onSetLargeImage }) {
  return (
    <ul className="ImageGallery">
      {hits.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onSetLargeImage={onSetLargeImage} />
      ))}
    </ul>
  )
};


ImageGallery.defaultProps = {};

ImageGallery.propTypes = {
  hits: arrayOf(object),
  onSetLargeImage: func.isRequired
};

export default ImageGallery;

