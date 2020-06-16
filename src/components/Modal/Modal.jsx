import React, { Component } from 'react';
import { func, string } from 'prop-types';

export default class Modal extends Component {

  static propTypes = {
    largeImageUrl: string.isRequired,
    onClick: func.isRequired
  };
  static defaulProps = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {

    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  render() {
    const { largeImageUrl, onClick } = this.props;

    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={largeImageUrl} alt="" width="1280" height="853" />
        </div>
        <button type="button" className="Modal-btn" onClick={onClick} >
        </button>
      </div>
    );
  }
}
