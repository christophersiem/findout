import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fetchQuestionById, sumOfAllPointsUsedFind} from "../utils/question-utils";
import Card from "@material-ui/core/Card";
import Input from "@material-ui/core/Input";


const useStyles = makeStyles(() => ({
    createButton: {
        borderRadius: "20px",
        backgroundColor: "black",
        color: "white"
    },
}))

export default function FindVoting() {
    const classes = useStyles();
    const [voting, setVoting] = useState([])
    const [id, setId] = useState("")
    const [points, setPoints] = useState([0])
    const [moodFactor, setMoodFactor] = useState(50)

    function handleSubmit() {
        fetchQuestionById(id)
            .then(data => {
                setVoting(data)
            })
            .catch((e) => console.error(e))
    }


    const handleChange = (event) => {
        setId(event.target.value)
    }

    const handleChangeInput = (event, index) => {
        const pointsList = [...points]
        pointsList[index] = parseInt(event.target.value)
        setPoints(pointsList)
        console.log(pointsList)
        setMoodFactor(sumOfAllPointsUsedFind(pointsList))
    }

    const handleBlur = (event,index) => {
        const pointsList = [...points]
        if (event.target.value < 0) {
            pointsList[index] = 0;
        } else if (event.target.value  > 100) {
            pointsList[index] = 100;
        }
        setPoints(pointsList)
    };



    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h2>Find Voting</h2>

            <TextField
                onChange={handleChange}
                name="id"
                type="text"
                id="outlined-secondary"
                label="Enter Voting ID"
                placeholder="ABCD1234"
                variant="outlined"
                style={{margin: 10}}
            />
            <Grid item>
                <Button
                    className={classes.createButton}
                    onClick={handleSubmit}
                    variant="contained"
                    style={{margin: 20}}
                >Find</Button>
            </Grid>
            <p className={classes.textStyle}>You have used {moodFactor}% of your Mood.</p>

            {moodFactor < 100 && <p className={classes.textStyleAlert}>Please use another {100 - moodFactor}% of your Mood</p>}
            {moodFactor > 100 && <p className={classes.textStyleAlert}>Please remove {moodFactor - 100}% of your Mood</p>}

            <p> ID: {voting.id}</p>
            <p> Question: {voting.question}</p>
            <p>{voting.optionList && voting.optionList.map((item, index) => (
                <Card>{item.option}

                    <input
                        type="range"
                        value={points[index]}
                        name="points"
                        min="0"
                        max="100"
                        onChange={event => handleChangeInput(event, index)}
                    />
                    <Input
                        onChange={event => handleChangeInput(event, index)}
                        onBlur={event =>handleBlur(event, index)}
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
            ))}
                <Button
                    className={classes.createButton}
                    variant="contained"
                    style={{margin: 20}}
                    disabled={moodFactor !== 100}
                >Vote</Button></p>
        </Grid>
    )
}