import { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginProps, RegisterProps } from '../../../Interfaces';
import { login } from '../../../services/Fetchs';
import styles from '../Login/Login.module.css';
import { useNavigate } from 'react-router-dom';
import { decodeToken, useJwt } from 'react-jwt';
import { userToken } from '../../../Interfaces';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const { setUser, setInfoUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.getItem('token') ? navigate('/') : null;
  });

  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.formulario}>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validate={(valores) => {
              let errores: LoginProps = {};

              // Validacion nombre
              if (!valores.username) {
                errores.username = 'Por favor ingresa un nombre';
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
                errores.username =
                  'El nombre solo puede contener letras y espacios';
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
              const respuesta = await login(valores);
              setInfoUser(respuesta.user);
              window.localStorage.setItem(
                'infoUser',
                JSON.stringify(respuesta.user)
              );
              console.log('state?', valores);
              !window.localStorage.getItem('token') ? null : navigate('/');
              console.log('token ?', window.localStorage.getItem('token'));
            }}
          >
            {({ errors }) => (
              <Form className="formulario">
                <div>
                  <label htmlFor="username">Username</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="John Doe"
                  />
                  <ErrorMessage
                    name="username"
                    component={() => (
                      <div className="error">{errors.username}</div>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="error">{errors.password}</div>
                    )}
                  />
                </div>
                <button type="submit">Enviar</button>
                {formularioEnviado && (
                  <p className="exito">Formulario enviado con exito!</p>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
