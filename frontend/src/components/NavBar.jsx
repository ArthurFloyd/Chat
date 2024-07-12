import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  NavDropdown, Nav,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuthContext from '../hooks/useAuthContext.js';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const { changeLanguage, resolvedLanguage } = i18n;

  const handleChangeLanguage = (lng) => {
    localStorage.setItem('userLanguage', lng);
    toast.success(t('languages.changeLang'), {
      position: 'top-right',
      autoClose: 2000,
    });
    changeLanguage(lng);
  };

  return (
    <NavDropdown title={t('languages.language')}>
      {i18n.languages
        .filter((lng) => lng !== resolvedLanguage)
        .map((lng) => (
          <NavDropdown.Item key={lng} onClick={() => handleChangeLanguage(lng)}>
            {i18n.getFixedT(lng)('languages.language')}
          </NavDropdown.Item>
        ))}
    </NavDropdown>
  );
};

const NavBar = () => {
  const { t } = useTranslation();

  const { isAuthed, logOut } = useAuthContext();

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hexlet Chat
        </Link>
        <Nav className="me-auto">
          <LanguageSelector />
        </Nav>
        {isAuthed && (
          <button type="button" className="btn btn-primary" onClick={() => logOut()}>
            {t('homePage.logOutButton')}
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
