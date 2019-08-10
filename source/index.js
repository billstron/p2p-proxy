const p2p = require('./p2p');
const proxy = require('./proxy');

module.exports = function factory(uid, p2pOpts, proxyOpts) {
  const client = p2p(uid, p2pOpts);
  const router = proxy(proxyOpts);

  client.router = router;

  return client;
}
