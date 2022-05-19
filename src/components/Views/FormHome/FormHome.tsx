import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { tweetProps } from '../../../Interfaces';
import { tweetPost, getPosts } from '../../../Fetchs';
import styles from '../FormHome/FormHome.module.css';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const FormHome = () => {
  const { posts, setPosts } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          tweet: '',
        }}
        validate={(valores) => {
          let errores: tweetProps = {};

          // Validacion nombre
          if (!valores.tweet || !valores.tweet.trim()) {
            errores.tweet = 'Por favor ingresa un tweet';
          }

          console.log('state?', valores);
          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          const respuesta = await tweetPost(valores);
          setPosts(await getPosts());
          console.log('submit valores', valores);
        }}
      >
        {({ errors }) => (
          <Form className='formulario'>
            <div>
              <Field
                className={styles.textarea}
                as='textarea'
                type='text'
                id='tweet'
                name='tweet'
                placeholder='¿What do you think?'
                required
              />
              <ErrorMessage
                name='tweet'
                component={() => <div className='error'>{errors.tweet}</div>}
              />
            </div>

            <button className={styles.button} type='submit'>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormHome;
