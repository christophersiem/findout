
export async function addNewQuestion(questionToAdd) {

    return await fetch("/api/question/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(questionToAdd)
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }
        return response.text();
    });
}

export async function fetchQuestionById(id) {

    const response = await fetch(`/api/question/${id}`, {
        method: "GET",
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export default function sumOfAllPointsUsed(optionList) {

    // Get all values of optionList with key "points" into an array
    let result = optionList.map(x => x.points[0]);

    //Summarize all values from Array
    let sum = result.reduce(function (a, b) {
        return a + b;
    });
    console.log(sum)
    return sum
}

export  function sumOfAllPointsUsedFind(pointsArray) {

    // Get all values of optionList with key "points" into an array
    let result = pointsArray.map(x=>x);

    //Summarize all values from Array
    let sum = result.reduce(function (a, b) {
        return a + b;
    });
    return sum
}
