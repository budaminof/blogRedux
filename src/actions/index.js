import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_UTL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tinytinytinytinytinytinytiny';

export function fetchPosts() {
  const request = axios.get(`${ROOT_UTL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};
