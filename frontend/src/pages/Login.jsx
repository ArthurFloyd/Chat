import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  FormGroup, FormControl, Button, FormFloating, FormLabel,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginComponent from '../components/LoginComponent.jsx';
import useAuthContext from '../hooks/useAuthContext.js';
import { useLoginMutation } from '../api/authenticateApi.js';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { setUserData } from '../store/slices/auth.js';
import avatar from '../assets/login.jpg';
import { appRoutes } from '../containers/Routes/routesPath.js';

const Login = () => {
  const { setAuth } = useAuthContext();
  const { t } = useTranslation();
  const [login] = useLoginMutation();

  const dispatch = useDispatch();

  const loginLocalStorageItems = useLocalStorage('login');

  const navigate = useNavigate();

  const validateLoginSchema = yup.object().shape({
    username: yup.string().required(t('loginPage.errors.usernameRequier')),
    password: yup.string().required(t('loginPage.errors.passwordRequired')),
  });

  const handleFormSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const { token, username } = await login({ ...values }).unwrap();

      loginLocalStorageItems(token, username);
      dispatch(setUserData({ token, username }));

      setSubmitting(false);
      setAuth(true);

      navigate(appRoutes.chatPagePath());
    } catch (error) {
      setSubmitting(false);
      const { status } = error;

      switch (status) {
        case 0: {
          setErrors({ password: t('loginPage.errors.network') });
          break;
        }
        case 401: {
          setErrors({ password: t('loginPage.errors.wrongData') });
          break;
        }
        default: {
          setErrors({ password: t('loginPage.errors.unknown') });
          break;
        }
      }
    }
  };

  return (
    <LoginComponent avatar={avatar}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleFormSubmit}
        validationSchema={validateLoginSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          errors, values, handleChange, handleBlur, isSubmitting,

        }) => (
          <Form className="col-12 col-md-6 mt-3 mt-mb-0">
            <h1 className="text-center mb-4">{t('loginPage.form.header')}</h1>

            <FormFloating className="mb-3">
              <FormControl
                type="text"
                name="username"
                id="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.password}
                autoFocus
              />
              <FormLabel htmlFor="username">{t('loginPage.form.username')}</FormLabel>
            </FormFloating>

            <FormFloating className="mb-3">
              <FormControl
                type="password"
                name="password"
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <FormLabel htmlFor="password">{t('loginPage.form.password')}</FormLabel>
              <FormGroup className="invalid-tooltip">{errors.password}</FormGroup>
            </FormFloating>

            <Button type="submit" variant="outline-primary" className="w-100" disabled={isSubmitting}>
              {t('loginPage.form.loginButton')}
            </Button>
          </Form>
        )}
      </Formik>
    </LoginComponent>
  );
};

export default Login;
