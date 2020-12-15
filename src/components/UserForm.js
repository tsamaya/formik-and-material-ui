/* eslint-disable react/prop-types */
import React from 'react';

import { Form } from 'formik';
import { Button, LinearProgress, Paper } from '@material-ui/core';
import UserFormFields from './UserFormFields';
import useStyles from '../styles/UserFormStyles';

const UserForm = ({
  currencies,
  movies,
  errors,
  touched,
  resetForm,
  submitForm,
  isSubmitting,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Form>
        <UserFormFields
          currencies={currencies}
          movies={movies}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
        />

        {isSubmitting && <LinearProgress />}
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
            disabled={isSubmitting}
            onClick={resetForm}
          >
            Reset
          </Button>
        </div>
      </Form>
    </Paper>
  );
};
export default UserForm;
