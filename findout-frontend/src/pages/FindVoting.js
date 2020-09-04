import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function FindVoting(){
return(
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
    >
        <h2>Find Voting</h2>

        <TextField
            name="id"
            type="text"
            id="outlined-secondary"
            label="Enter Voting ID"
            placeholder="ABCD1234"
            variant="outlined"
            style={{margin: 10}}
        />
    </Grid>
)
}