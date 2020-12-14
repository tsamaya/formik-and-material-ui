import React, { Fragment }  from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { Paper } from '@material-ui/core';
import UserForm from '../components/UserForm';

import movies from '../data/movies';

const UserContainer = () => {

    const initialValues = {
        name: '',
        email: "",
        password: "",
        birthday: null,
        gender: 'male',
        newsletter: 'yes',
        movie: null,
        terms: false
    }

    const validationSchema = Yup.object({
        name: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password:  Yup.string().required(),
        birthday: Yup.date().required(),
        gender: Yup.string().required(),
        // newsletter: Yup.string()
        movie: Yup.object().required(),
      });
 

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("submitting")
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
    };
      


    return (<Formik 
    initialValues={initialValues}
    validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({values, errors, touched, ...rest})=>
(<Fragment>
<UserForm movies={movies} errors={errors} touched={touched} {...rest} />
<br />
<Paper >
        values<pre>{JSON.stringify(values, null, 2)}</pre>
        touched<pre>{JSON.stringify(touched, null, 2)}</pre>
        errors<pre>{JSON.stringify(errors, null, 2)}</pre>
        </Paper>
</Fragment>
)        }
    </Formik>)

}

export default UserContainer;
