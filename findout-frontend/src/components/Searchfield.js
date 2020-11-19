import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  createButton: {
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
  },
}));

export default function SearchField({ handleChange, handleSubmit }) {
  const classes = useStyles();
  return (
    <>
      <h2>Find Voting</h2>

      <TextField
        onChange={handleChange}
        name="id"
        type="text"
        id="outlined-secondary"
        label="Enter Voting ID"
        placeholder="ABCD1234"
        variant="outlined"
        style={{ margin: 10 }}
      />
      <Grid item>
        <Button
          className={classes.createButton}
          onClick={handleSubmit}
          variant="contained"
          style={{ margin: 20 }}
        >
          Find
        </Button>
      </Grid>
    </>
  );
}
