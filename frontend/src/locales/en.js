const enLocales = {
  translation: {
    languages: {
      language: 'English',
      changeLang: 'Language successfully changed',
    },
    loginPage: {
      loginImg: 'Sign in',
      form: {
        header: 'Sign in',
        username: 'Your nickname',
        password: 'Password',
        loginButton: 'Sign in',
        footer: 'Don\'t have an account? ',
        footerRegistrationLink: 'Sign up',
      },
      errors: {
        usernameRequired: 'Required field',
        passwordRequired: 'Required field',
        wrongData: 'Incorrect user name or password',
        network: 'No connection to the server',
        unknown: 'An unexpected error occurred',
      },
    },
    homePage: {
      logOutButton: 'Log out',
      channels: 'Channels',
      createNewChannel: 'Add a new channel',
      setupChannel: 'Channel management',
      newMessagePlaceholder: 'Type a message...',
      sendMessageButton: 'Send',
      newMessageInput: 'New message',
      messageCount: {
        message_zero: '{{count}} messages',
        message_one: '{{count}} message',
        message_few: '{{count}} messages',
        message_many: '{{count}} messages',
      },
      errors: {
        noConnection: 'No connection to the server',
        unknown: 'An unexpected error occurred',
        notAuthed: 'Sign in',
      },
      modals: {
        addNewChannelHeader: 'Add a channel',
        newChannelName: 'Channel name',
        renameChannelHeader: 'Rename the channel',
        deleteChannelHeader: 'Remove channel',
        deleteChannelBody: 'Are you sure?',
        confirmButton: 'Send',
        declineButton: 'Cancel',
        deleteButton: 'Remove',
        deleteDropMenu: 'Remove',
        renameDropMenu: 'Rename',
        errors: {
          shortChannelName: '3 to 20 characters',
          longChannelName: '3 to 20 characters',
          requiredField: 'Required field',
          uniqueName: 'A channel with this name already exists',
        },
      },
      notifications: {
        success: {
          addChannel: 'Channel successfully created',
          removeChannel: 'Channel successfully deleted',
          renameChannel: 'Channel successfully renamed',
        },
      },
    },
    signupPage: {
      form: {
        header: 'Sign up',
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        registrationButton: 'Sign up',
        image: 'Sign in',
      },
      errors: {
        shortUserName: '3 to 20 characters',
        longUserName: '3 to 20 characters',
        shortPassword: 'At least 6 characters',
        passwordMatch: 'Password confirmation does not match the password',
        requiredField: 'Required field',
        userExists: 'A user with this username already exists',
        network: 'No connection to the server',
        unknown: 'An unexpected error occurred',
      },
    },
    notFoundPage: {
      header: 'Page not found',
      body: 'But you can go',
      link: 'to the home page',
    },
  },
};

export default enLocales;
