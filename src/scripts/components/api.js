const config = {
  baseUrl: 'https://nomoreparties.co/v1/exp-mipt-fbc-1',
  headers: {
    authorization: '1de6d26e-ed58-4ebe-aebb-e805f437bfff',
    'Content-Type': 'application/json'
  }
};

export function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function handleError(err) {
  console.log(err);
}

export function getServerUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then(handleResponse)
}

export function getServerInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then(handleResponse)
}

export function patchUserAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar })
  })
    .then(handleResponse)
}

export function patchUserData(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ name, about })
  })
    .then(handleResponse)
}

export function postNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ name, link })
  })
    .then(handleResponse)
}

export function deleteServerCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
}

export function likeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(handleResponse)
}

export function dislikeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(handleResponse)
}


