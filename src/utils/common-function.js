/**
 * Created by linhv on 4/3/2017.
 */

const generateParam = (obj) => (
  Object.keys(obj).map(
    (k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`
  ).join('&')
);

export {
  generateParam,
};
