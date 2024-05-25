import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { requestUser } from '../../api.js';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: 'admin',
      password: 'admin1',
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
      {/* <label htmlFor="email"></label> */}
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Ваш ник"
      />
      {/* <label htmlFor="password"></label> */}
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Пароль"
      />

      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginPage;
