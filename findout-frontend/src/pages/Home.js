import React from "react";
import Button from "@material-ui/core/Button";


export default function Home() {
    return (
        <>
            <p>Welcome! Click here to create a new Voting:</p>

            <Button href="/add">
                <span>New Voting</span>
            </Button>

        </>
    )
}