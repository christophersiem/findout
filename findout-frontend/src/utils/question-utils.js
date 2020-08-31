
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

        return response.json();
    });
}