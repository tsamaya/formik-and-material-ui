/* eslint-disable react/prop-types */
import React from 'react';
import {
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  TextField as MUITextField,
} from '@material-ui/core';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import {
  CheckboxWithLabel,
  RadioGroup,
  Switch,
  TextField,
} from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { Autocomplete } from 'formik-material-ui-lab';
import useStyles from '../styles/UserFormStyles';

const ErrorM = ({ children }) => {
  return (
    <div>
      <font color="red">{children}</font>
    </div>
  );
};

const UserFormFields = ({ currencies, movies }) => {
  const classes = useStyles();

  const { errors, touched, isSubmitting } = useFormikContext();

  return (
    <div className={classes.fields}>
      <Field
        className={classes.field}
        component={TextField}
        required
        fullWidth
        name="name"
        type="text"
        label="Name"
      />

      <Field
        className={classes.field}
        component={TextField}
        required
        name="email"
        type="email"
        label="Email"
      />

      <Field
        className={classes.field}
        component={TextField}
        required
        type="password"
        label="Password"
        name="password"
      />

      <Field
        className={classes.field}
        component={KeyboardDatePicker}
        required
        clearable={true}
        label="Date of Birth"
        name="birthday"
        format="dd/MM/yyyy"
      />

      <Field component={RadioGroup} name="gender" className={classes.field}>
        {/* required is not automatic */}
        <FormLabel component="legend">Gender *</FormLabel>
        <FormControlLabel
          value="male"
          control={<Radio disabled={isSubmitting} />}
          label="He"
          disabled={isSubmitting}
        />
        <FormControlLabel
          value="female"
          control={<Radio disabled={isSubmitting} />}
          label="She"
          disabled={isSubmitting}
        />
        {/* error is not automatic */}
        <ErrorMessage name="gender" component={ErrorM} />
      </Field>

      <FormLabel component="legend" className={classes.field}>
        Newsletter: No{' '}
        <Field component={Switch} type="checkbox" name="newsletter" /> Yes
      </FormLabel>

      <Field
        className={classes.field}
        fullWidth
        component={TextField}
        select
        margin="normal"
        name="currency"
        label="Currency"
      >
        {currencies &&
          currencies.map((currenncy, idx) => {
            return (
              <MenuItem
                key={idx}
                value={currenncy.code}
              >{`${currenncy.code} ${currenncy.label}`}</MenuItem>
            );
          })}
      </Field>

      {/* touched and errors must be in props and touched is not automatic */}
      <Field
        className={classes.field}
        name="movie"
        component={Autocomplete}
        options={movies}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <MUITextField
            {...params}
            required
            error={touched.movie && !!errors.movie}
            helperText={touched.movie && errors.movie}
            label="Favorite movie"
          />
        )}
      />

      <Field
        className={classes.field}
        component={TextField}
        required
        fullWidth
        name="magic"
        type="number"
        label="Magic decimal number"
      />

      <div className={classes.field}>
        {/* error is not automatic */}
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="terms"
          Label={{ label: 'Accept Terms and Conditions' }}
        />
        <ErrorMessage name="terms" component={ErrorM} />
      </div>
    </div>
  );
};
export default UserFormFields;
