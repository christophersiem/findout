import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import sumOfAllPointsUsed, {addNewQuestion} from "../utils/question-utils";
import UsedMood from "../components/UsedMood";
import Grid from "@material-ui/core/Grid";
import OptionField from "./OptionField";
import ActionButtons from "./ActionButtons";

export default function AddVotingPage() {

    const [moodFactor, setMoodFactor] = useState(50)
    const [question, setQuestion] = useState("");
    const [code, setCode] = useState("");
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
        addNewQuestion(questionToAdd)
            .then(data =>{
                setCode(data)
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
        list[index]["points"] = 100 - moodFactor < 0 ? 0 : list[index]["points"] + parseInt(100 - moodFactor);
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
                    onChange={(event)=> setQuestion(event.target.value)}
                />
                <h2>Options</h2>
                <UsedMood moodFactor={moodFactor}/>
                {optionList.map((item, index) => {
                    return (
                        <div key={index}>
                            <OptionField handleChangeOptions={handleChangeOptions}
                                         handleSliderChange={handleSliderChange}
                                         index={index}
                                         handleBlur={handleBlur}
                                         item={item}
                                         handleInputChange={handleInputChange}
                                         autoFill={autoFill}/>
                        </div>
                    )})}

                <ActionButtons handleAddClick={handleAddClick}
                               handleRemoveClick={handleRemoveClick}
                               handleSubmit={handleSubmit}
                               moodFactor={moodFactor}
                               code={code}
                />
            </Grid>
            <pre>{JSON.stringify(optionList)}</pre>
        </>
    )
}