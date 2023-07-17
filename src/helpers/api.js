
const URL = 'https://studapi.teachmeskills.by';
export const getBody = (data) => JSON.stringify(data);

export const request = {
  get: (url, params) => {
    const urlParams = new URLSearchParams(params);// limit=11&offset=1
    return fetch(`${url}?${urlParams}`).then(response => response.json());
  },
  post: (url, config = {}) => {
    return fetch(url,
      {
        method:'POST',
        ...config,
      })
      .then(response => response.json());
  }
}

export const getHeaders = () => ({ ['Content-Type']: 'application/json' })
export const API = {
  setAuth: ({ username, email, password }) => {
    return request.post(`${URL}/auth/users/`,
      {
        body: getBody({ username, email, password }),
        headers: getHeaders()
      })
  },
  getPosts: (params = {}) => {
    return request.get(`${URL}/blog/posts/`, params);
  }
}
