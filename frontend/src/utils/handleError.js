import { toast } from 'react-toastify';

const handleError = ({
  error, filePath, translate, logOut, rollbar,
}) => {
  let errorKey = 'unknown';

  switch (error.status) {
    case 'FETCH_ERROR':
      errorKey = 'noConnection';

      break;
    case 401:
      errorKey = 'notAuthed';
      logOut();
      break;
    default:
      break;
  }

  toast.error(translate(`homePage.errors.${errorKey}`));
  rollbar.error(filePath, error);
};

export default handleError;
