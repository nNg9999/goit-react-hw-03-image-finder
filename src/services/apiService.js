import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page) => {

  const baseUrl = 'https://pixabay.com/api/';
  const key = '16133219-b7191e329ab916084dd10c777';
  const requestParams = `?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios
    .get(baseUrl + requestParams)
    .then(response => ({
      hits: response.data.hits,
      totalHits: response.data.totalHits,
    }))
};

export default {
  fetchArticlesWithQuery,
};