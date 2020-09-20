import React from "react";
import Button from "@material-ui/core/Button";

import useStyles from "./styles/formField.js";

const AppButton = ({ value, style, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Button
      className={`${classes.button} ${style}`}
      variant="contained"
      disableElevation
      size="large"
      {...otherProps}
    >
      {value}
    </Button>
  );
};

export default AppButton;
