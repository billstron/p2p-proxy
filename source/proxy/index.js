const axios = require('axios');

module.exports = function factory(opts) {
  const request = axios.create(opts);

  const router = function(req, response) {
    const { route, method, body, uid } = req;

    request({
      method,
      url: route,
      data: body,
    })
      .then(({ status, data }) => {
        response(status, data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const { status, data } = error.response;
          response(status, data);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
}
