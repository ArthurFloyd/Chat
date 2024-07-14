import { toast } from 'react-toastify';
// import { useRollbar } from '@rollbar/react';
// import { useTranslation } from 'react-i18next';

// const { t } = useTranslation();

const handleError = (error, filePath, logOut, translate, rollbar) => {
  console.log('start', filePath, logOut);

  // let errorKey = t('homePage.errors.unknown');
  let errorKey = 'unknown';
  let callback = () => null;
  console.log(errorKey);

  switch (error.status) {
    case 'FETCH_ERROR': // do not remember
      errorKey = 'noConnection';
      console.log(errorKey);

      break;
    case 401: // need to check
      errorKey = 'notAuthed';
      console.log(errorKey);
      callback = logOut;
      break;
    default:
      break;
  }
  // toast.error(errorKey);
  // useRollbar.error(filePath, error);
  // console.log('collback', callback);
  console.log(0, translate);
  toast.error(translate(`homePage.errors.${errorKey}`));
  console.log(1, rollbar);
  rollbar.error(filePath, error);
  console.log(2, callback);
  callback();
  console.log('finish');
};

export default handleError;
