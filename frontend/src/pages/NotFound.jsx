import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import notFound from '../assets/notFound.jpg';
import { appRoutes } from '../containers/Routes/routesPath';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-5">
      <img src={notFound} alt="Страница не найдена" className="img-fluid" />
      <h1 className="h4 text-muted">{t('notFoundPage.header')}</h1>
      <p className="text-muted">
        {t('notFoundPage.body')}
        {' '}
        <Link to={appRoutes.signupPagePath()}>{t('notFoundPage.link')}</Link>
      </p>
    </div>
  );
};

export default NotFound;
