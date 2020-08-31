import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import {IconButton} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';

export default function AddVoting() {

    const [optionList,setOptionList] = useState(["option1"]);

    const handleAddClick = () => {
        setOptionList([...optionList, "option2"]);
    };

    const handleRemoveClick = () => {
        const list = [...optionList];
        list.pop();
        setOptionList(list);
    };

    return (
        <>
            <h2>Add new Voting</h2>
            <form noValidate autoComplete="off">

                <TextField
                    id="outlined-secondary"
                    label="Enter question"
                    variant="outlined"
                    color="black"
                />

            </form>

            <h2>Options</h2>
            <form noValidate autoComplete="off">
                {optionList.map((x,i)=> {
                return(
                    <TextField
                        style={{margin:10}}
                        id="outlined-secondary"
                        label="Enter an option"
                        variant="outlined"
                        color="black"
                    />
                )
                })
                }


            </form>
            <IconButton
                onClick={handleAddClick}>
                <AddIcon style={{marginTop: 10, fontSize: "2.5rem"}}/>
            </IconButton>
            <IconButton
                onClick={handleRemoveClick}>
                <RemoveIcon style={{marginTop: 10, fontSize: "2.5rem"}}/>
            </IconButton>
        </>
    )
}