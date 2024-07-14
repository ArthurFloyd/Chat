import { toast } from 'react-toastify';

const handleError = (error, filePath, logOut, translate, rollbar) => {
  let errorKey = 'unknown';
  let callback = () => null;

  switch (error.status) {
    case 'FETCH_ERROR':
      errorKey = 'noConnection';

      break;
    case 401:
      errorKey = 'notAuthed';
      callback = logOut;
      break;
    default:
      break;
  }

  toast.error(translate(`homePage.errors.${errorKey}`));
  rollbar.error(filePath, error);
  callback();
};

export default handleError;
