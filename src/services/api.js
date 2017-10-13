import normalize from 'json-api-normalizer';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

const API_HOST = (process.env.NODE_ENV === 'development') ? 'http://localhost:4000/api/' : 'https://api.openbudget.xyz/api/';

function callApi(endpoint, method = 'get', headers = {}, body = {}) {
  const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint;
  let options = {
    method,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  };

  if (Object.keys(headers).length > 0) {
    const modifiedHeaders = Object.assign(options.headers, headers);
    options = Object.assign(options, { headers: modifiedHeaders });
  }

  if (Object.keys(body).length > 0) {
    const normalizedBody = {
      data: {
        attributes: body,
      },
    };

    options = Object.assign(options, { body: JSON.stringify(normalizedBody) });
  }

  return fetch(fullUrl, options)
    .then(response =>
      response.json().then(json => ({ json, response })),
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      let returnObject = null;

      if (Object.prototype.hasOwnProperty.call(camelizedJson, 'data')) {
        returnObject = Object.assign({}, normalize(camelizedJson));
      } else {
        returnObject = json;
      }

      window.hithere = returnObject;
      return returnObject;
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happend' }),
    );
}

export const fetchAccounts = () => callApi('accounts');
export const fetchAccount = id => callApi(`accounts/${id}`);

export const signInUser = (email, password) => callApi('auth/token', 'post', {}, { email, password });
