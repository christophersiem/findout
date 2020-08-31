import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import {IconButton} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import Button from "@material-ui/core/Button";
import {addNewQuestion} from "../utils/question-utils";


export default function AddVoting() {


    const [question, setQuestion] = useState("");
    const [optionList, setOptionList] = useState([
        {option: "", points:""},
    ]);

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...optionList];
        list[index][name] = value;

        setOptionList(list)
    }

    const handleChangeQuestion = (event) => {
        setQuestion(event.target.value);
    };

    const handleAddClick = () => {
        setOptionList([...optionList, {option: "", points: ""}]);

    };

    const handleRemoveClick = () => {
        const list = [...optionList];
        list.pop();
        setOptionList(list);
    };

    const questionToAdd = {
        question:question,
        optionList:optionList
    }

    function handleSubmit() {
        console.log(optionList)
        addNewQuestion(questionToAdd)
            .catch((e) => console.error(e))
    }

    return (
        <>
            <h2>Add new Voting</h2>
            <form noValidate autoComplete="off">

                <TextField

                    id="outlined-secondary"
                    label="Enter question"
                    variant="outlined"
                    color="black"
                    onChange={handleChangeQuestion}
                />

            </form>

            <h2>Options</h2>
            <form noValidate autoComplete="off">
                {optionList.map((item, i) => {
                    return (
                        <div key={i}>
                            <TextField
                                onChange={e => handleChange(e, i)}
                                value={item.option}
                                style={{margin: 10}}
                                name="option"
                                id="outlined-secondary"
                                label="Enter an option"
                                variant="outlined"
                                color="black"
                            />
                            <TextField
                                type="number"
                                onChange={e => handleChange(e, i)}
                                value={item.points}
                                name="points"
                                id="standard-number"
                                label="Points"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />


                        </div>
                    )
                })}

            </form>

            <IconButton
                onClick={handleAddClick}>
                <AddIcon style={{marginTop: 10, fontSize: "2.5rem"}}/>
            </IconButton>
            <IconButton
                onClick={handleRemoveClick}>
                <RemoveIcon style={{marginTop: 10, fontSize: "2.5rem"}}/>
            </IconButton>
            <Button
                onClick={handleSubmit}
                variant="contained"
                style={{margin: 20}}
            >Create</Button>
            <pre>{JSON.stringify(optionList)}</pre>
        </>

    )
}