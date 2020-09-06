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
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Input from "@material-ui/core/Input";
import Alert from "@material-ui/lab/Alert";



const useStyles = makeStyles(() => ({
    createButton: {
        borderRadius: "20px",
        backgroundColor: "black",
        color: "white"
    },
    input: {
        width: 50,
        marginLeft: 10
    },
    id:{
        fontWeight:"fontWeightBold",
        fontSize:18,
        textAlign:"center"

    }
}))

export default function AddVoting() {

    const classes = useStyles();
    const [moodFactor, setMoodFactor] = useState(50)
    const [question, setQuestion] = useState("");
    const [code, setCode] = useState("test");
    const [votingCreated, setVotingCreated] = useState(false)
    const [optionList, setOptionList] = useState([
        {option: "", points: 50},
    ]);
    const [value, setValue] = React.useState(30);

    const handleChangeOptions = (event, index) => {
        const {name, value} = event.target;
        const list = [...optionList];
        list[index][name] = value;
        setOptionList(list)
    }

    const handleChangeQuestion = (event) => {
        setQuestion(event.target.value);
    };

    const handleAddClick = () => {
        setOptionList([...optionList, {option: "", points: 0}]);
        setMoodFactor(sumOfAllPointsUsed(optionList))
    };

    const handleRemoveClick = () => {
        const list = [...optionList];
        list.pop();
        setOptionList(list);
        setMoodFactor(sumOfAllPointsUsed(optionList))
    };

    const questionToAdd = {
        question: question,
        optionList: optionList
    };

    function handleSubmit() {
        console.log(optionList)
        addNewQuestion(questionToAdd)
            .then(data =>{
                setCode(data)
                setVotingCreated(true)
            })
            .catch((e) => console.error(e))

    }

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    const handleSliderChange = (event, index) => {
        const {name, value} = event.target;
        const list = [...optionList];
        list[index][name] = parseInt(value);
        setOptionList(list)
        setMoodFactor(sumOfAllPointsUsed(optionList))
    };


    const handleInputChange = (event, index) => {
        const {name, value} = event.target;
        const list = [...optionList];
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        list[index][name] = parseInt(value);
        setOptionList(list)
        setMoodFactor(sumOfAllPointsUsed(optionList))
    };

    function autoFill(event, index) {
        const list = [...optionList];
        list[index]["points"] =100-moodFactor<0?0: list[index]["points"]+parseInt(100-moodFactor);
        setOptionList(list)
        setMoodFactor(sumOfAllPointsUsed(optionList))
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
                            <Grid
                                container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                            >

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


                                <input
                                    type="range"
                                    name="points"
                                    min="0"
                                    max="100"
                                    value={item.points}
                                    onChange={event => handleSliderChange(event, index)}/>


                                <Input

                                    className={classes.input}
                                    value={item.points}
                                    margin="dense"
                                    name="points"
                                    onChange={event => handleInputChange(event, index)}
                                    onBlur={handleBlur}
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                                <IconButton
                                    name="points"
                                    onClick={event => autoFill(event, index)}>
                                    <DoubleArrowIcon style={{fontSize: "1rem", color: "green"}}/>
                                </IconButton>
                            </Grid>

                        </div>)
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
                {votingCreated&&
                <Alert icon={false} severity="success">
                    Success! Save Voting-ID <p className={classes.id}>{code}</p>
                </Alert>}
            </Grid>
            <pre>{JSON.stringify(optionList)}</pre>
        </>

    )
}