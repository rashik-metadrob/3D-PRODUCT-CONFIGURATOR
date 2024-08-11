import React from "react";
import { FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toggleAutoRotate } from '../../redux/actions/AutoRotateActions';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    outline: 'none',
    border: '1px solid gray',
    borderRadius: '4px',
    padding: theme.spacing(1, 2),
    '&:hover': {
      borderColor: '#303f9f',
    },
  },
}));

const TogglerButton = ({ toggleAutoRotate }) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.formControl}>
      <Button
        style={{ width: 300 }}
        onClick={toggleAutoRotate}
        className={classes.button}
      >
        Rotate
      </Button>
    </FormControl>
  );
};

export default connect(null, { toggleAutoRotate })(TogglerButton);
