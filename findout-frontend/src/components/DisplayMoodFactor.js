import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  createButton: {
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
  },
}));

export default function DisplayMoodFactor({ moodFactor }) {
  const classes = useStyles();

  return (
    <>
      <p className={classes.textStyle}>
        You have used {moodFactor}% of your Mood.
      </p>

      {moodFactor < 100 && (
        <p className={classes.textStyleAlert}>
          Please use another {100 - moodFactor}% of your Mood
        </p>
      )}
      {moodFactor > 100 && (
        <p className={classes.textStyleAlert}>
          Please remove {moodFactor - 100}% of your Mood
        </p>
      )}
    </>
  );
}
