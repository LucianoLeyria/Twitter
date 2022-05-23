import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginProps } from '../../Interfaces';
import { login } from '../../Fetchs';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validate={(valores) => {
          let errores: LoginProps = {};

          // Validacion nombre
          if (!valores.username) {
            errores.username = 'Please enter a name';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
            errores.username = 'The name must contain only letters and spaces';
          }

          // Validacion password
          if (!valores.password) {
            errores.password = 'Please enter a password';
          } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(valores.password)
          ) {
            errores.password =
              'Minimum eight characters, at least one letter and one number:';
          }

          console.log('state?', valores);
          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          await login(valores);
          console.log('state?', valores);
          !window.localStorage.getItem('token') ? null : navigate('/');
          console.log('token ?', window.localStorage.getItem('token'));
        }}
      >
        {({ errors }) => (
          <Form className="flex flex-col h-full w-full px-8 gap-5">
            <h2 className="text-white text-2xl font-bold text-center">
              Sign in to Rhino
            </h2>
            <label
              htmlFor="username"
              className="flex flex-col text-white gap-2"
            >
              Username
              <Field
                type="text"
                id="username"
                name="username"
                className="bg-transparent border border-slate-700 rounded-sm p-4"
                placeholder="John Doe"
              />
              <ErrorMessage
                name="username"
                component={() => (
                  <span className="text-red-500">{errors.username}</span>
                )}
              />
            </label>
            <label
              htmlFor="password"
              className="flex flex-col text-white gap-2 relative"
            >
              Password
              <Field
                type="text"
                id="password"
                name="password"
                className="bg-transparent border border-slate-700 rounded-sm p-4"
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <span className="text-red-500">{errors.password}</span>
                )}
              />
            </label>
            <button
              className="w-full p-2 bg-white text-black rounded-full"
              type="submit"
            >
              Send
            </button>
            <span className="w-full text-center p-2 border border-slate-700 text-white rounded-full">
              Forgot your password?
            </span>
            {formularioEnviado && (
              <p className="exito">Form send successfully :p </p>
            )}
            <p className="text-slate-700">
              You don't have an account?{' '}
              <span className="text-blue-700 cursor-pointer">Sing In</span>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
