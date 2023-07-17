const URL = 'https://studapi.teachmeskills.by';
export const request = {
  get: (url, params = {}) => {
    const urlParams = new URLSearchParams(params);// limit=11&offset=1
    return fetch(`${url}?${urlParams}`).then(response => response.json());
  },
  post: (url, body = {}) => {
    return fetch(url,
      {
        method:'POST',
        headers: {
          ['Content-Type']: 'application/json',
        },
        body: body,
      })
      .then(response => response.json());
  }
}

export const API = {
  setAuth: ({ username, email, password }) => {
    return request.post(`${URL}/auth/users/`, JSON.stringify({ username, email, password }))
  },
  getPosts: (params = {}) => {
    return request.get(`${URL}/blog/posts/`, params);
  },
  activateUser: (params) => {
    return request.post(`${URL}/auth/users/activation/`, JSON.stringify(params))
  }
}
