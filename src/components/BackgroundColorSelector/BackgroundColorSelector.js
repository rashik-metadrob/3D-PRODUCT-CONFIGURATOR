import React from "react";
import { connect } from "react-redux";
import { setBackgroundColor } from "../../redux/actions/BackgroundColorActions";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const BackgroundColorSelector = (props) => {
  const classes = useStyles();
  const { backgroundColorStore, setBackgroundColor } = props;

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel shrink variant="outlined" id="background-color-selector">
        Select Background Color
      </InputLabel>
      <Select
        labelId="background-color-selector"
        labelWidth={175}
        native
        variant="outlined"
        style={{
          width: 300
        }}
        value={backgroundColorStore.backgroundColor}
        onChange={handleColorChange}
      >
        <option value="#ffffff">White</option>
        <option value="#000000">Black</option>
        <option value="#aeaeae">Gray</option>
       
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  backgroundColorStore: state.backgroundColorStore,
});

export default connect(mapStateToProps, { setBackgroundColor })(BackgroundColorSelector);
