/* eslint no-restricted-globals: 0 */

export const required = value => (value ? undefined : 'Required');
export const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
export const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
};
