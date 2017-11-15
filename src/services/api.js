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
      response.json().then(json => ({ json, response }))).then(({ json, response }) => {
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

      return { body: returnObject, headers: response.headers };
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happend' }),
    );
}

export const fetchAccounts = authToken => callApi('accounts', 'get', { Authorization: authToken });
export const fetchAccount = (id, authToken) => callApi(`accounts/${id}`, 'get', { Authorization: authToken });
export const createAccount = (name, description, category, authToken) => callApi('accounts', 'post', { Authorization: authToken }, { name, description, category });
export const updateAccount = (id, name, description, category, authToken) => {
  return callApi(`accounts/${id}`, 'put', { Authorization: authToken }, { name, description, category });
};
export const deleteAccount = (id, authToken) => callApi(`accounts/${id}`, 'delete', { Authorization: authToken });

export const fetchBudgets = authToken => callApi('budgets', 'get', { Authorization: authToken });
export const fetchBudget = (id, authToken) => callApi(`budgets/${id}`, 'get', { Authorization: authToken });
export const createBudget = (name, description, authToken) => callApi('budgets', 'post', { Authorization: authToken }, { name, description });
export const updateBudget = (id, name, description, authToken) => {
  return callApi(`budgets/${id}`, 'put', { Authorization: authToken }, { name, description });
};
export const deleteBudget = (id, authToken) => callApi(`budgets/${id}`, 'delete', { Authorization: authToken });

export const signInUser = (email, password) => callApi('auth/token', 'post', {}, { email, password });
export const signOutUser = authToken => callApi('auth/token', 'delete', { Authorization: `Bearer ${authToken}` });
export const signUpUser = (email, password) => callApi('users', 'post', {}, { email, password });
