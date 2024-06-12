import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
// import * as yup from 'yup';
import {
  Form, Button, Container, Row, Col, Card,
} from 'react-bootstrap';

import { requestUser } from '../../api.js';
import { appRoutes } from '../../routes/routes.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const input = useRef(null);
  // const validate = yup.object().shape({
  //   username: yup.string().trim().required(),
  //   password: yup.string().trim().required(),
  // });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validate,
    onSubmit: async (values) => {
      // console.log(JSON.stringify(values, null, 2));

      try {
        const token = await requestUser(values);
        // console.log('token', token);
        if (token) {
          navigate(appRoutes.chatPagePath());
        }
      } catch (error) {
        // console.log('err', error);
        formik.setSubmitting(false);
        if (error.response.status === 401) {
          formik.setErrors({ username: 'Неверные имя пользователя или пароль', password: 'Неверные имя пользователя или пароль' });
          input.current.select();
        }
      }
    },
  });

  const isUsernameInvalid = formik.errors.username && formik.touched.username;
  const isPasswordInvalid = formik.errors.password && formik.touched.password;

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-5 row">
              <Form
                className="col-12 col-md-6 mt-3 mt-mb-0"
                onSubmit={formik.handleSubmit}
              >
                <h1 className="text-center mb-4">Войти</h1>
                <fieldset disabled={formik.isSubmitting}>
                  <Form.Group className="form-floating mb-3" controlId="username">
                    <Form.Control
                      type="text"
                      placeholder=""
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                      autoComplete="username"
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        formik.handleChange(e);
                      }}
                      ref={input}
                      isInvalid={isUsernameInvalid}
                    />
                    <Form.Label>Ваш ник</Form.Label>
                  </Form.Group>

                  <Form.Group className="form-floating mb-4" controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        formik.handleChange(e);
                      }}
                      isInvalid={isPasswordInvalid}
                    />
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control.Feedback type="invalid" className="invalid-feedback" tooltip>
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" variant="outline-primary" className="w-100 mb-3">Войти</Button>
                </fieldset>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-muted text-center">
                <span>Нет аккаунта?</span>
                {' '}
                <NavLink href={appRoutes.signupPagePath()}>Регистрация</NavLink>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
