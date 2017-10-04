/* eslint no-multi-assign: 0 */

const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

export default raf;
