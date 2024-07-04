const apiPath = '/api/v1';

const chatApiRoutes = {
  RegisterUser: () => [apiPath, 'signup'].join('/'),
  LoginUser: () => [apiPath, 'login'].join('/'),
  GetChannels: () => [apiPath, 'channels'].join('/'),
  AddChannel: () => [apiPath, 'channels'].join('/'),
  EditChannel: () => [apiPath, 'channels/:id'].join('/'),
  RemoveChannel: () => [apiPath, 'channels/:id'].join('/'),
  GetMessages: () => [apiPath, 'messages'].join('/'),
  AddMessage: () => [apiPath, 'messages'].join('/'),
  EditMessage: () => [apiPath, 'messages/:id'].join('/'),
  RemoveMessage: () => [apiPath, 'messages/:id'].join('/'),
  SubscribeNewChannel: () => 'newChannel',
  SubscribeRemoveChannel: () => 'removeChannel',
  SubscribeRenameChannel: () => 'renameChannel',
  SubscribeNewMessage: () => 'newMessage',
  SubscribeRenameMessage: () => 'renameMessage',
  SubscribeRemoveMessage: () => 'removeMessage',
};

const appRoutes = {
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  notFoundPagePath: () => '*',
  signupPagePath: () => '/signup',
};

export { chatApiRoutes, appRoutes };
