import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Paper } from '@material-ui/core';
import UserForm from '../components/UserForm';

import currencies from '../data/currencies';
import movies from '../data/movies';

const UserContainer = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    birthday: null,
    gender: '',
    newsletter: 'yes',
    currency: '',
    movie: null,
    magic: 'NaN',
    terms: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required(),
    birthday: Yup.date().typeError('Birthday is mandatory').required(),
    gender: Yup.string().required(),
    // newsletter: Yup.string()
    currency: Yup.string().required(),
    movie: Yup.object().typeError('Mandatory selection').required(),
    magic: Yup.number().typeError('Mandatory magic decimal number').required(),
    terms: Yup.bool().oneOf([true], 'Terms must be accepted'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // console.log('submitting');
    setTimeout(() => {
      setSubmitting(false);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, ...rest }) => (
        <Fragment>
          <UserForm
            currencies={currencies}
            movies={movies}
            errors={errors}
            touched={touched}
            {...rest}
          />
          <br />
          <Paper>
            values<pre>{JSON.stringify(values, null, 2)}</pre>
            touched<pre>{JSON.stringify(touched, null, 2)}</pre>
            errors<pre>{JSON.stringify(errors, null, 2)}</pre>
          </Paper>
        </Fragment>
      )}
    </Formik>
  );
};

export default UserContainer;
