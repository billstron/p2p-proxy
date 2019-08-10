require('dotenv').config();
const fs = require('fs');
const p2pProxy = require('./source');

const uid = process.env.UID;
const privateKeyFile = process.env.PRIVATE_CERT;
const privateKey = fs.readFileSync(privateKeyFile).toString();

const p2pOpts = {
  locationServer: 'https://pdns.billstron.com',
  stunServer: {
    host: 'stun1.l.google.com',
    port: 19302,
  },
  privateKey,
};

const proxyOpts = {
  baseUrl: 'http://localhost',
  timeout: 1000,
};

const server = p2pProxy(uid, p2pOpts, proxyOpts);
server.connect();
