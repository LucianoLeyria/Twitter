import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { tweetProps } from '../../Interfaces';
import { tweetPost, getPosts } from '../../Fetchs';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

const FormHome = () => {
  const { posts, setPosts } = useContext(GlobalContext);

  return (
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
        <Form className="relative w-screen border border-slate-700">
          <Field
            className="w-full bg-transparent resize-none text-white p-2"
            as="textarea"
            type="text"
            id="tweet"
            name="tweet"
            placeholder="¿What do you think?"
            required
          />
          <ErrorMessage
            name="tweet"
            component={() => (
              <span className="text-red-500 absolute bottom-1 left-1">
                {errors.tweet}
              </span>
            )}
          />
          <button
            className="absolute px-2 py-0.5 align-middle text-white bg-blue-500 duration-200 ease-in-out rounded-full bottom-2 right-2 hover:bg-blue-700"
            type="submit"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormHome;
