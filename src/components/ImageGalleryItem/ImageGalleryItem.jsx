import React from 'react';
import { string, func } from 'prop-types';

function ImageGalleryItem({ webformatURL, largeImageURL, onSetLargeImage }) {

  return (
    <li className="ImageGalleryItem" >
      <img src={webformatURL} alt="img"
        className="ImageGalleryItem-image" width="640" height="429"
        onClick={() => { return onSetLargeImage(largeImageURL) }} />
    </li>

  )
};

ImageGalleryItem.defaultProps = {};

ImageGalleryItem.propTypes = {
  webformatURL: string.isRequired,
  largeImageURL: string.isRequired,
  onSetLargeImage: func.isRequired
};


export default ImageGalleryItem;

