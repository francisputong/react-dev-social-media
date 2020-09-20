import React from "react";
import Button from "@material-ui/core/Button";
import { useFormikContext } from "formik";

import useStyles from "./styles/formField.js";

const AppFormButton = ({ style, value, name, ...otherProps }) => {
  delete otherProps.form;
  const { handleSubmit, values } = useFormikContext();
  const classes = useStyles();

  return (
    <Button
      type="submit"
      onClick={handleSubmit}
      className={`${classes.button} ${style}`}
      variant="contained"
      disableElevation
      disabled={name && !values[name]}
      {...otherProps}
    >
      {value}
    </Button>
  );
};
export default AppFormButton;
