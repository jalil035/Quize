const questionsData = [
    {
        question: "What is Capital of Bangladesh",
        answer: [
            {text: "Dhaka", correct: true},
            {text: "Nowakhali", correct: false},
            {text: "Chottorgram", correct: false},
            {text: "Khulna", correct: false},
        ]
    },
    {
        question: "How many Division have in Bangladesh",
        answer: [
            {text: "6 Division", correct: false},
            {text: "5 Division", correct: false},
            {text: "7 Division", correct: true},
            {text: "9 Division", correct: false},
        ]
    },
    {
        question: "How Many District Have in bangladesh",
        answer: [
            {text: "30 District", correct: false},
            {text: "45 District", correct: false},
            {text: "75 District", correct: false},
            {text: "64 District", correct: true},
        ]
    },
    {
        question: "Whice One is biggest District in Bangladesh",
        answer: [
            {text: "Gazipur", correct: false},
            {text: "Bandarbon", correct: true},
            {text: "Pabna", correct: false},
            {text: "Khulna", correct: false},
        ]
    },
    {
        question: "How many Division have in Bangladesh",
        answer: [
            {text: "6 Division", correct: false},
            {text: "5 Division", correct: false},
            {text: "7 Division", correct: true},
            {text: "9 Division", correct: false},
        ]
    },
    {
        question: "Whice One is biggest District in Bangladesh",
        answer: [
            {text: "Gazipur", correct: false},
            {text: "Bandarbon", correct: true},
            {text: "Pabna", correct: false},
            {text: "Khulna", correct: false},
        ]
    },
    {
        question: "What is Capital of Bangladesh",
        answer: [
            {text: "Dhaka", correct: true},
            {text: "Nowakhali", correct: false},
            {text: "Chottorgram", correct: false},
            {text: "Khulna", correct: false},
        ]
    },
];

let questionData = document.getElementById("question");
let answerData = document.getElementById("answer");
let nextBtnData = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtnData.innerHTML = "Submit & Next";
    showQuestion();
}

function showQuestion(){
    resetPreviousQuestion();
    let currentQuestionData = questionsData[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionData.innerHTML = questionNumber + ". " + currentQuestionData.question;

    currentQuestionData.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerData.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetPreviousQuestion(){
    nextBtnData.style.display = "none";
    while(answerData.firstChild){
        answerData.removeChild(answerData.firstChild);
    }
}

function selectAnswer(e){
    let selectedButton = e.target;
    let isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++
    }else{
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerData.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtnData.style.display = "block";
}

function showScore(){
    resetPreviousQuestion();
    questionData.innerHTML = `Your Score is ${score} Out of ${questionsData.length}!`;
    nextBtnData.innerHTML = "Play Again";
    nextBtnData.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questionsData.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtnData.addEventListener("click", () => {
    if(currentQuestionIndex < questionsData.length){
        handelNextButton();
    }else{
        startQuize();
    }
})

startQuize();