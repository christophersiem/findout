import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fetchQuestionById} from "../utils/question-utils";

const useStyles = makeStyles(() => ({
    createButton: {
        borderRadius: "20px",
        backgroundColor: "black",
        color: "white"
    },
}))

export default function FindVoting(){
    const classes = useStyles();
    const [voting,setVoting] = useState([])
    const [id, setId] =useState("")

    function handleSubmit() {
        fetchQuestionById(id)
            .then(data =>{
                setVoting(data)
            })
            .catch((e) => console.error(e))
    }
    console.log(voting)

const handleChange =(event) =>{
        setId(event.target.value)
}

return(
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
       <p> ID: {voting.id}</p>
        <p> Question: {voting.question}</p>
        <p>{voting.optionList && voting.optionList.map((item) =>(
            <p>{item.option}</p>
            ))}</p>
    </Grid>
)
}