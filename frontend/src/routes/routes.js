const apiPath = '/api/v1';

const chatApiRoutes = {
  login: () => [apiPath, 'login'].join('/'),
  signup: () => [apiPath, 'signup'].join('/'),
  channels: () => [apiPath, 'channels'].join('/'),
  messages: () => [apiPath, 'messages'].join('/'),
};

const appRoutes = {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  notFoundPagePath: () => '*',
  signupPagePath: () => '/signup',
};

export { chatApiRoutes, appRoutes };
