import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { IconButton } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  input: {
    width: 50,
    marginLeft: 10,
  },
}));

export default function OptionField({
  handleChangeOptions,
  handleSliderChange,
  index,
  handleBlur,
  item,
  handleInputChange,
  autoFill,
}) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <TextField
        onChange={(event) => handleChangeOptions(event, index)}
        value={item.option}
        name="answer"
        type="text"
        id="outlined-secondary"
        label="Enter an option"
        placeholder="e.g. watch a movie"
        variant="outlined"
        style={{ margin: 10 }}
      />

      <input
        type="range"
        name="points"
        min="0"
        max="100"
        value={item.points}
        onChange={(event) => handleSliderChange(event, index)}
      />

      <Input
        className={classes.input}
        value={item.points}
        margin="dense"
        name="points"
        onChange={(event) => handleInputChange(event, index)}
        onBlur={handleBlur}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
      <IconButton name="points" onClick={(event) => autoFill(event, index)}>
        <DoubleArrowIcon style={{ fontSize: '1rem', color: 'green' }} />
      </IconButton>
    </Grid>
  );
}
