const apiPath = '/api/v1';

const chatApiRoutes = {
  baseUrl: () => apiPath,
  channels: () => [apiPath, 'channels'].join('/'),
  messages: () => [apiPath, 'messages'].join('/'),
};

const appRoutes = {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  notFoundPagePath: () => '*',
  signupPagePath: () => '/signup',
};

export { appRoutes, chatApiRoutes };
