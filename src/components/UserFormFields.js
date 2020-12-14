/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  TextField as MUITextField,
} from '@material-ui/core';
import { Field } from 'formik';
import {
  CheckboxWithLabel,
  RadioGroup,
  Switch,
  TextField,
} from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { Autocomplete } from 'formik-material-ui-lab';

const UserFormFields = ({ movies, errors, touched, isSubmitting }) => {
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
        format="dd/mm/yyyy"
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
        component={CheckboxWithLabel}
        type="checkbox"
        name="terms"
        Label={{ label: 'Accept Terms and Conditions' }}
      />
    </Fragment>
  );
};
export default UserFormFields;
