let questions = []

const object1 = {
    category: "Astronomy",
    question: "What is the largest planet in the solar system?",
    choices: ["Earth", "Venus", "Jupiter"],
    answer: "Jupiter"
}

const object2 = {
    category: "Sports",
    question: "Who is the best at football?",
    choices: ["Ronaldo", "Messi", "Pele"],
    answer: "Messi"
}

const object3 = {
    category: "Geography",
    question: "What is the largest by landmass country in the world?",
    choices: ["Russia", "USA", "China"],
    answer: "Russia"
}

const object4 = {
    category: "Math",
    question: "How much is 4*3?",
    choices: ["14", "12", "13"],
    answer: "12"
}

const object5 = {
    category: "History",
    question: "When did World war I start?",
    choices: ["1914", "1915", "1967"],
    answer: "1914"
}

questions.push(object1, object2, object3, object4, object5)

function getRandomQuestion(question){
   const randomQuestion = Math.floor(Math.random() * question.length);
   return question[randomQuestion];
}

function getRandomComputerChoice(choice){
    const randomchoice = Math.floor(Math.random() * choice.length);
    return choice[randomchoice];
}

function getResults(question, choice){
    if(choice === question.answer){
        return "The computer's choice is correct!"
    }
    else{
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}

