import React from "react";
import TextField from "@material-ui/core/TextField";
import { useFormikContext } from "formik";

import useStyles from "./styles/formField.js";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      error={errors[name] && touched[name] ? true : false}
      onBlur={() => setFieldTouched(name)}
      onChange={handleChange(name)}
      helperText={errors[name] && touched[name] ? errors[name] : null}
      {...otherProps}
    />
  );
};

export default AppFormField;
