import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import UserContainer from './containers/UserContainer';

import useStyles from './styles/AppStyles';

const App = () => {
  const classes = useStyles();

  const newOne = {
    name: '',
    email: '',
    password: '',
    birthday: null,
    gender: '',
    newsletter: false,
    currency: '',
    movie: null,
    magic: 'NaN',
    terms: false,
  };

  const toEdit = {
    name: 'Joe',
    email: 'joe@email.com',
    password: 'secret',
    birthday: '2000-01-15',
    gender: 'male',
    newsletter: true,
    currency: 'EUR',
    movie: { title: 'Pulp Fiction', year: 1994 },
    magic: 3.141516,
    terms: true,
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <header className={classes.header}>
        <h1>
          Formik & <span>Material-UI</span>
        </h1>
        <h2>A simple app</h2>
      </header>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserContainer initialValues={newOne} />
        <hr></hr>
        <UserContainer initialValues={toEdit} />
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default App;
