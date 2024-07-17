### Autotests and linter status:
[![Actions Status](https://github.com/ArthurFloyd/frontend-project-12/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ArthurFloyd/frontend-project-12/actions)

# Chatty

#### [Chatty](https://frontend-project-12-9.onrender.com/) - this is a simplified version of Slack

Сhatty is a single-page application with registration and authentication.
All user actions are tracked and processed in real-time.
There are permanent (default) channels in the chat, as well as user-created channels. Channels can also be renamed or deleted.
Each user action is accompanied by a display of notification, so the interface is as friendly as possible.
There is support for two languages (ru, en) with switching between them at any time. Also, bad words are filtered.

## Basic functionality

### 1. User Authentication (Sign up):

![Изображение][1]

[1]: frontend/public/signUpReadme.png "Screenshot of the registration page"

### 2. Login:

![Изображение][2]

[2]: frontend/public/loginReadme.png "Login page screenshot"

### 3. Chatty (Home page):
  - **Sending messages** - users can enter and send text messages to other participants within the selected channel
  - **Channel management**:
    - Adding channels
    - Rename channels
    - Delete channels

![Изображение][3]

[3]: frontend/public/homeReadme.png "Home page screenshot"

### 4. Error (Not found page):

![Изображение][4]

[4]: frontend/public/errorPageReadme.png "Screenshot of the error page"


## Get started

```bash
make install \\ to install dependencies
```
```bash
make start \\ to run app
```
```bash
make start-frontend \\ to run frontend
make start-backend \\ to run server
```

## Supports the following browsers

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


## Supported languages

Русский ✔  
English ✔
