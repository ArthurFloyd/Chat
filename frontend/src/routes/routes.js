const apiPath = '/api/v1';

const chatApiRoutes = {
  login: () => [apiPath, 'login'].join('/'),
  signup: () => [apiPath, 'signup'].join('/'),
  data: () => [apiPath, 'channels'].join('/'),
};

const appRoutes = {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  notFoundPagePath: () => '*',
  signupPagePath: () => '/signup',
};

export { chatApiRoutes, appRoutes };
