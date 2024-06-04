import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  FloatingLabel, Form, Button, Container, Row, Col, Card, NavLink,
} from 'react-bootstrap';

import { requestUser } from '../../api.js';
import { appRoutes } from '../../routes/routes.js';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: 'admin',
      password: 'admin',
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));

      try {
        const { data } = await requestUser(values);
        console.log('login data', data);
      } catch (error) {
        if (error.response.status === 401) {
          formik.setErrors({ email: 'incorrect credentials', password: 'incorrect credentials' });
        }
      }
    },
  });

  useEffect(() => {

  });

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-5 row">
              <Form>
                <h1 className="text-center mb-4">Войти</h1>
                <Form.Group className="form-floating mb-3" controlId="username">
                  <FloatingLabel controlId="floatingInput" label="Ваш ник" className="mb-3">
                    <Form.Control type="username" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="form-floating mb-4" controlId="password">
                  <FloatingLabel controlId="floatingPassword" label="Пароль">
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="form-floating mb-4" controlId="">
                  <FloatingLabel>
                    <Form.Control.Feedback type="invalid" className="invalid-feedback">
                      Неверные имя пользователя или пароль
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
                <Button type="submit" variant="outline-primary" className="w-100 mb-3">Войти</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center text-muted">
                <span>Нет аккаунта?</span>
                <NavLink href={appRoutes.signupPagePath()}>Регистрация</NavLink>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  // return (
  //       <form onSubmit={formik.handleSubmit}>
  //     <h1 className="text-center mb-4">Войти</h1>
  //     {/* <label htmlFor="email"></label> */}
  //     <input
  //       id="email"
  //       name="email"
  //       type="text"
  //       onChange={formik.handleChange}
  //       value={formik.values.email}
  //       placeholder="Ваш ник"
  //     />
  //     {/* <label htmlFor="password"></label> */}
  //     <input
  //       id="password"
  //       name="password"
  //       type="password"
  //       onChange={formik.handleChange}
  //       value={formik.values.password}
  //       placeholder="Пароль"
  //     />

  //     <button type="submit">Войти</button>
  //   </form>
  // )
};

export default LoginPage;
