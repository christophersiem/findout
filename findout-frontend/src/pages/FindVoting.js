import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  addPoints,
  fetchQuestionById,
  sumOfAllPointsUsedFind,
} from '../utils/question-utils';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchField from '../components/Searchfield';
import AddPointsForm from './AddPointsForm';
import Button from '@material-ui/core/Button';
import DisplayMoodFactor from '../components/DisplayMoodFactor';

const useStyles = makeStyles(() => ({
  createButton: {
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
  },
}));

export default function FindVoting() {
  const classes = useStyles();
  const [voting, setVoting] = useState([]);
  const [id, setId] = useState('');
  const [points, setPoints] = useState([0, 0]);
  const [moodFactor, setMoodFactor] = useState(50);

  function findVoting() {
    fetchQuestionById(id)
      .then((data) => {
        setVoting(data);
      })
      .catch((e) => console.error(e));
  }

  function pointsToAdd() {
    const pointsToAdd = {
      points: points,
      code: id,
    };
    console.log(pointsToAdd);
    addPoints(pointsToAdd).catch((e) => console.error(e));
  }

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleChangeInput = (event, index) => {
    const pointsList = [...points];
    pointsList[index] = parseInt(event.target.value);
    setPoints(pointsList);
    console.log(points);
    setMoodFactor(sumOfAllPointsUsedFind(pointsList));
  };

  const handleBlur = (event, index) => {
    const pointsList = [...points];
    if (event.target.value < 0) {
      pointsList[index] = 0;
    } else if (event.target.value > 100) {
      pointsList[index] = 100;
    }
    setPoints(pointsList);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <SearchField handleChange={handleChange} handleSubmit={findVoting} />
      {voting.id && <DisplayMoodFactor moodFactor={moodFactor} />}
      {voting.id && <p>ID: {voting.id}</p>}
      {voting.id && <p>Question: {voting.question}</p>}
      {voting.optionList &&
        voting.optionList.map((item, index) => (
          <AddPointsForm
            item={item}
            points={points}
            handleBlur={handleBlur}
            handleChangeInput={handleChangeInput}
            index={index}
            moodFactor={moodFactor}
          />
        ))}
      {voting.id && (
        <Button
          className={classes.createButton}
          variant="contained"
          style={{ margin: 20 }}
          disabled={moodFactor !== 100}
          onClick={pointsToAdd}
        >
          Vote
        </Button>
      )}
    </Grid>
  );
}
