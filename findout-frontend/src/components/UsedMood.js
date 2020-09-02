import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    textStyle: {
        fontFamily: 'Averia Serif Libre'
    },
    textStyleAlert: {
        fontFamily: 'Averia Serif Libre',
        color: "red",
    }
}))
export default function UsedMood(props) {
    const classes = useStyles();

    return (
        <>
            <p className={classes.textStyle}>You have used {props.moodFactor}% of your Mood.</p>

            {props.moodFactor < 100 && <p className={classes.textStyleAlert}>Please use another {100 - props.moodFactor}% of your Mood</p>}
            {props.moodFactor > 100 && <p className={classes.textStyleAlert}>Please remove {props.moodFactor - 100}% of your Mood</p>}
        </>
    )
}