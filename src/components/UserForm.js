import React  from 'react';

import { Form, } from 'formik';
import { Button, LinearProgress, Paper } from '@material-ui/core';
import UserFormFields from './UserFormFields';


const UserForm = ({ movies, errors, touched, resetForm, submitForm, isSubmitting }) => {

        return (
<Paper >
            <Form>
              <UserFormFields movies={movies} errors={errors} touched={touched} isSubmitting={isSubmitting} />
    {isSubmitting && <LinearProgress />}
    <br />
    <Button
      variant="contained"
      color="default"
      disabled={isSubmitting}
      onClick={resetForm}
      >
      Reset
    </Button>
    <Button
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      onClick={submitForm}
      >
      Submit
    </Button>
  </Form></Paper>
          )
}
export default UserForm;