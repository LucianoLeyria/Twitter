import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterProps } from '../../Interfaces';
import { register } from '../../Fetchs';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="">
          <Formik
            initialValues={{
              username: '',
              password: '',
              email: '',
            }}
            validate={(valores) => {
              let errores: RegisterProps = {};

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

              // Validacion email
              if (!valores.email) {
                errores.email = 'Por favor ingresa un correo electronico';
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errores.email =
                  'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.';
              }

              console.log('state?', valores);
              return errores;
            }}
            onSubmit={async (valores, { resetForm }) => {
              resetForm();
              const respuesta = await register(valores);
              respuesta.success === true ? navigate('/login') : null;
              console.log('state?', valores);
            }}
          >
            {({ errors }) => (
              <Form className="">
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
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
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

export default Register;
