const apiPath = '/api/v1';

const chatApiRoutes = {
  login: () => [apiPath, 'login'].join('/'),
  singup: () => [apiPath, 'singup'].join('/'),
};

const appRoutes = {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  notFoundPagePath: () => '*',
  signupPagePath: () => '/signup',
};

export { chatApiRoutes, appRoutes };
