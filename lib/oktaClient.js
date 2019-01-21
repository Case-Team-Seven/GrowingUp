const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-336569.oktapreview.com',
  token: '00iOofRZXOB7riDL2XzNR1O73OVxQNukqz8dA5uYOO'
});

module.exports = client;