import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import {IconButton} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import Button from "@material-ui/core/Button";
import sumOfAllPointsUsed, {addNewQuestion} from "../utils/question-utils";
import UsedMood from "../components/UsedMood";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    createButton: {
        borderRadius: "20px",
        backgroundColor: "black",
        color:"white"
    },
}))


export default function AddVoting() {

    const classes = useStyles();
    const [moodFactor, setMoodFactor] = useState(50)
    const [question, setQuestion] = useState("");
    const [optionList, setOptionList] = useState([
        {option: "", points: 50},
    ]);

    const handleChangeOptions = (event, index) => {
        const {name, value} = event.target;
        const list = [...optionList];
        list[index][name] = value;
        setOptionList(list)
    }

    const handleChangePoints = (event, index) => {
        const {name, value} = event.target;
        const list = [...optionList];
        list[index][name] = parseInt(value);
        setOptionList(list)
        setMoodFactor(sumOfAllPointsUsed(optionList))
    }



    const handleChangeQuestion = (event) => {
        setQuestion(event.target.value);
    };

    const handleAddClick = () => {
        setOptionList([...optionList, {option: "", points: 0}]);
    };

    const handleRemoveClick = () => {
        const list = [...optionList];
        list.pop();
        setOptionList(list);
    };

    const questionToAdd = {
        question: question,
        optionList: optionList
    };

    function handleSubmit() {
        console.log(optionList)
        addNewQuestion(questionToAdd)
            .catch((e) => console.error(e))
    }


    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
            <h2>Add new Voting</h2>

            <TextField
                style={{width: 300}}
                id="outlined-secondary"
                label="Enter question"
                placeholder="e.g. what should we do on friday?"
                variant="outlined"
                onChange={handleChangeQuestion}
            />


            <h2>Options</h2>
            <UsedMood moodFactor={moodFactor}/>
            {optionList.map((item, index) => {
                return (

                    <div key={index}>
                        <Grid item>
                        <TextField
                            onChange={event => handleChangeOptions(event, index)}
                            value={item.option}
                            name="option"
                            type="text"
                            id="outlined-secondary"
                            label="Enter an option"
                            placeholder="e.g. watch a movie"
                            variant="outlined"
                            style={{margin: 10}}
                        />

                        <TextField
                            onChange={event => handleChangePoints(event, index)}
                            value={item.points}
                            name="points"
                            id="outlined-number"
                            label="My mood factor (%)"
                            type="number"
                            variant="outlined"
                            style={{margin: 10}}
                        />
                        </Grid>
                    </div>

                )
            })}

                <Grid item>
                    <IconButton
                        onClick={handleAddClick}>
                        <AddIcon style={{fontSize: "2rem", color: "green"}}/>
                        <p style={{fontSize: "16px", color: "green"}}>Add Option</p>
                    </IconButton>
                    <IconButton
                        onClick={handleRemoveClick}>
                        <RemoveIcon style={{fontSize: "2rem", color: "red"}}/>
                        <p style={{fontSize: "16px", color: "red"}}>Remove Option</p>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Button
                        className={classes.createButton}
                        onClick={handleSubmit}
                        variant="contained"
                        style={{margin: 20}}
                        disabled={moodFactor !== 100}
                    >Create</Button>
                </Grid>
            </Grid>

        </>

    )
}