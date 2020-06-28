import React, { Component } from 'react';
import { func } from 'prop-types';

export default class Searchbar extends Component {

  static propTypes = {
    onSubmit: func.isRequired,
  };
  static defaulProps = {};

  state = { inputValue: '' };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"

            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
};
