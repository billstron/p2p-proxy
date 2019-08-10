const Q = require('q');
const p2piot = require('p2piot');

module.exports = function factory(uid, opts) {
  const client = p2piot(uid, opts);

  client.once('connected', () => {
    console.log('connected');
  });

  client.on('online', (uid, status) => {
    console.log(`online: ${uid}`, status);
  });

  return client;
};
