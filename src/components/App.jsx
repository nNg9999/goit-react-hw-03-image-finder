// core
import React, { Component } from 'react';
// nodemoduls

// components
import Layout from './Layout';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import Modal from './Modal';
import Spinner from './Loader';
import Notification from './Notification';

//utils
import apiService from '../services/apiService';
import { ToastContainer, toast } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  state = {
    hits: [],
    totalHits: 0,
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    largeImageUrl: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // const prevQuery = prevState.searchQuery;
    // const nextQuery = this.state.searchQuery;

    // if (prevQuery !== nextQuery) {
    //   this.fetchArticles();
    // }

    // this.fetchArticles();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });


    apiService
      .fetchArticlesWithQuery(searchQuery, page)
      .then(data => {
        toast.success('images loading');
        return data
      })
      .then(data =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...data.hits],
          page: prevState.page + 1,
          largeImageUrl: data.hits.map(({ largeImageURL }) => ({ largeImageURL }))
        })))
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message);
      })
      .finally(() => this.setState({ loading: false }))
  };

  handleSearchFormSubmit = query => {

    if (!query) {
      return
    }

    this.setState({
      searchQuery: query,
      page: 1,
      hits: [],
    });

    setTimeout(() => {
      this.fetchArticles();
    }, 10);
  };


  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  handelClick = () => {
    this.setState({ showModal: true });
  }

  setLargeImage = (url) => {
    this.setState({ largeImageUrl: url, showModal: true })
  }


  render() {
    const { hits, loading, error, showModal } = this.state;
    const { largeImageUrl, totalHits, page } = this.state;

    return (
      <Layout >
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {hits.length > 0 && <ImageGallery hits={hits} onClick={this.handelClick} onSetLargeImage={this.setLargeImage} />}
        {loading && <Spinner />}
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {hits.length > 0 && !loading && page !== totalHits && (
          <Button onClick={this.fetchArticles} />
        )}
        {showModal && <Modal largeImageUrl={largeImageUrl} onClick={this.toggleModal} />}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Layout>
    );
  }
}

export default App;