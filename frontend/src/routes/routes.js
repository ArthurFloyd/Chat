const apiPath = '/api/v1';

const chatApiRoutes = {
  login: () => [apiPath, 'login'].join('/'),
  singup: () => [apiPath, 'signup'].join('/'),
  channels: () => [apiPath, 'channels'].join('/'),
};

const appRoutes = {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  notFoundPagePath: () => '*',
  signupPagePath: () => '/signup',
};

export { chatApiRoutes, appRoutes };
