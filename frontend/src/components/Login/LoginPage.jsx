import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';

import { requestUser } from '../../api.js';

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
    // const formData = {
    //   userName: 'admin',
    //   password: 'admin',
    // };

    // localStorage =
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">Войти</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginPage;
