import React from 'react';
import Grid from "@material-ui/core/Grid";
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    createButton: {
        borderRadius: "20px",
        backgroundColor: "black",
        color: "white"
    },

    id:{
        fontWeight:"fontWeightBold",
        fontSize:18,
        textAlign:"center"
    }
}))

export default function ActionButtons({handleAddClick, handleRemoveClick, handleSubmit, moodFactor,code }) {
    const classes = useStyles();

    return (
        <>
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
                    // disabled={moodFactor !== 100}
                >Create</Button>
            </Grid>
            {code &&
            <Alert icon={false} severity="success">
                Success! Save and share your Voting-ID <p className={classes.id}>{code}</p>
            </Alert>}
        </>

    )
};
