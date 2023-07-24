import store from "../store";
import {refreshToken} from "../store/auth";

const URL = 'https://studapi.teachmeskills.by';

const requestMiddleware = async (request /* fetch() */) => {
  return await request.then(response => {
    // if (response.status === 401) {
    //   store.dispatch(refreshToken(store.getState().token.refresh));
    //   throw new Error(response.json());
    // }

    return response.json();
  });
}

export const request = {
  get: (url, config = {}) => {
    const urlParams = new URLSearchParams(config.params);//
    const requestConfig = {}

    if (config.token) {
      requestConfig.headers = {
        Authorization: `Bearer ${config.token}`
      }
    }

    return requestMiddleware(fetch(`${url}?${urlParams}`, requestConfig));
  },
  post: (url, body = {}) => {
    return requestMiddleware(fetch(url,
      {
        method:'POST',
        headers: {
          ['Content-Type']: 'application/json',
        },
        body: body,
      }));
  }
}

export const API = {
  setAuth: ({ username, email, password }) => {
    return request.post(`${URL}/auth/users/`, JSON.stringify({ username, email, password }));
  },
  logIn: ({ email, password }) => {
    return request.post(`${URL}/auth/jwt/create/`, JSON.stringify({ email, password }));
  },
  getPosts: ({ params, url }) => {
    return request.get(url || `${URL}/blog/posts/`, url ? {} : { params });
  },
  activateUser: (params) => {
    return request.post(`${URL}/auth/users/activation/`, JSON.stringify(params));
  },
  getPost: (postId) => {
    return request.get(`${URL}/blog/posts/${postId}/`);
  },
  getUser: (accessToken) => {
    return request.get(`${URL}/auth/users/me/`, { token: accessToken });
  },
  refreshToken: (refresh) => {
    return request.post(`${URL}/auth/jwt/refresh/`, JSON.stringify({ refresh }));
  }
}
