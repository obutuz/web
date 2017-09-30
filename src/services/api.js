import normalize from 'json-api-normalizer';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

const API_HOST = (process.env.NODE_ENV === 'development') ? 'http://localhost:4000/api/' : 'https://api.openbudget.xyz/api/';

function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response })),
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      const returnObject = Object.assign({}, normalize(camelizedJson));

      return returnObject;
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happend' }),
    );
}

export const fetchAccounts = () => callApi('accounts');
export const fetchAccount = id => callApi(`accounts/${id}`);
