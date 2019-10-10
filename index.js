const { Provider } = require('oidc-provider');
const configuration = {
  // ... see available options /docs
  clients: [{
    client_id: 'foo',
    client_secret: 'bar',
    redirect_uris: ['http://localhost:7411/cb'],
    scopes: ['openid', 'email', 'profile'],
    grant_types: ['authorization_code', 'refresh_token'],
    response_types: ['code'],
    // + other client properties
  }],
  issueRefreshToken: () => true,
};

const oidc = new Provider('http://localhost:1233', configuration);

// express/nodejs style application callback (req, res, next) for use with express apps, see /examples/express.js
// oidc.callback

// koa application for use with koa apps, see /examples/koa.js
// oidc.app

// or just expose a server standalone, see /examples/standalone.js
const server = oidc.listen(1233, () => {
  console.log('oidc-provider listening on port 1233, check http://localhost:1233/.well-known/openid-configuration');
});
