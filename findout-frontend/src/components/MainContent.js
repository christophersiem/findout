import React from "react";
import AddVoting from "../pages/AddVoting";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({

    grow: {
        flexGrow: "1",
    },
}));

export default function MainContent() {
    const classes = useStyles();

    return (

            <main className={classes.grow}>

                <AddVoting/>

            </main>

    )
}