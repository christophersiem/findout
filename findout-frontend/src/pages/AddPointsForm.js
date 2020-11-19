import React from 'react';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  createButton: {
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
  },
}));

export default function AddPointsForm({
  item,
  index,
  points,
  handleChangeInput,
  handleBlur,
}) {
  const classes = useStyles();
  return (
    <>
      <Card key={item.points}>
        {item.option}

        <input
          type="range"
          value={points[index] || ''}
          name="points"
          min="0"
          max="100"
          onChange={(event) => handleChangeInput(event, index)}
        />
        <Input
          onChange={(event) => handleChangeInput(event, index)}
          onBlur={(event) => handleBlur(event, index)}
          value={points[index]}
          className={classes.input}
          margin="dense"
          name="points"
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Card>
    </>
  );
}
