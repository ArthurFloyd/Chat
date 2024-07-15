import { toast } from 'react-toastify';

const showSuccess = ({ successMessage, translate }) => {
  toast.success(translate(`homePage.notifications.success.${successMessage}`), {
    position: 'top-right',
    autoClose: 2000,
  });
};

export default showSuccess;
