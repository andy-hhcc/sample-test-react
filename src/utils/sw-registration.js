if (('serviceWorker' in navigator) && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js')
  .then((reg) => {
    console.log(reg); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.log(err); // eslint-disable-line no-console
  });
}
