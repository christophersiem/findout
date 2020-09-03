import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(() => ({
    content:{
        textAlign:"center",
        fontFamily: 'Averia Serif Libre',
    }
}))



export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <p>Welcome! Click here to create a new Voting:</p>

            <Button href="/add">
                <span>New Voting</span>
            </Button>

        </div>
    )
}