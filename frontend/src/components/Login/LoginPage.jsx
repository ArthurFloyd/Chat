import React from 'react';
import { useFormik } from 'formik';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">Войти</h1>
      {/* <label htmlFor="email"></label> */}
      <input
        id="email"
        name="email"
        type="email"
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
