import React from 'react';
import { Container } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import UserContainer from './containers/UserContainer';

import useStyles from './styles/AppStyles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <header className={classes.header}>
        <h1>
          Formik & <span>Material-UI</span>
        </h1>
        <h2>A simple app</h2>
      </header>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserContainer />
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default App;
