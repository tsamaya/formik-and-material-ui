/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  TextField as MUITextField,
} from '@material-ui/core';
import { ErrorMessage, Field } from 'formik';
import {
  CheckboxWithLabel,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { Autocomplete } from 'formik-material-ui-lab';

const UserFormFields = ({
  currencies,
  movies,
  errors,
  touched,
  isSubmitting,
}) => {
  return (
    <Fragment>
      <Field
        component={TextField}
        required
        fullWidth
        name="name"
        type="text"
        label="Name"
      />

      <br />

      <Field
        component={TextField}
        required
        name="email"
        type="email"
        label="Email"
      />
      <Field
        component={TextField}
        required
        type="password"
        label="Password"
        name="password"
      />

      <br />

      <Field
        component={KeyboardDatePicker}
        required
        label="Date of Birth"
        name="birthday"
        format="dd/MM/yyyy"
      />

      <br />

      <Field component={RadioGroup} name="gender">
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
        <ErrorMessage name="gender" />
      </Field>

      <FormLabel component="legend">
        Newsletter No{' '}
        <Field
          component={Switch}
          type="checkbox"
          value={'yes'}
          name="newsletter"
        />{' '}
        Yes
      </FormLabel>

      <br />

      <FormControl fullWidth>
        {/* required is not automatic */}
        <InputLabel htmlFor="currency-field">Currency *</InputLabel>
        <Field
          component={Select}
          name="currency"
          inputProps={{
            id: 'currency-field',
          }}
        >
          {currencies &&
            currencies.map((currenncy, idx) => {
              console.log(currenncy);
              return (
                <MenuItem
                  key={idx}
                  value={currenncy.code}
                >{`${currenncy.code} ${currenncy.label}`}</MenuItem>
              );
            })}
        </Field>
        {/* error is not automatic */}
        <ErrorMessage name="currency" />
      </FormControl>

      <br />

      {/* touched and errors must be in props and touched is not automatic */}
      <Field
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

      <br />

      <Field
        component={TextField}
        required
        fullWidth
        name="magic"
        type="number"
        label="Magic decimal number"
      />

      <br />

      {/* error is not automatic */}
      <Field
        component={CheckboxWithLabel}
        type="checkbox"
        name="terms"
        Label={{ label: 'Accept Terms and Conditions' }}
      />
      <ErrorMessage name="terms" />
    </Fragment>
  );
};
export default UserFormFields;
