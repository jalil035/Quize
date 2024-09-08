const questions = [
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
        question: "How many Divition have in Bangladesh",
        answer: [
            {text: "6 (Six)", correct: false},
            {text: "5 (Five)", correct: false},
            {text: "7 (Seven)", correct: true},
            {text: "9 (Nine)", correct: false},
        ]
    },
    {
        question: "How Many District Have in bangladesh",
        answer: [
            {text: "30 (Thirty)", correct: false},
            {text: "45 (Fourty Five)", correct: false},
            {text: "75 (Seventy Five)", correct: false},
            {text: "64 (Sixty Four)", correct: true},
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
        question: "How many Divition have in Bangladesh",
        answer: [
            {text: "6 (Six)", correct: false},
            {text: "5 (Five)", correct: false},
            {text: "7 (Seven)", correct: true},
            {text: "9 (Nine)", correct: false},
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

let questionElement = document.getElementById("question");
let answerElement = document.getElementById("answer");
let nextBtnElement = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtnElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetQuestion();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetQuestion(){
    nextBtnElement.style.display = "none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextBtnElement.style.display = "block";
}

function showScore(){
    resetQuestion();
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
    nextBtnElement.innerHTML = "Play Again";
    nextBtnElement.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtnElement.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuize();
    }
})

startQuize();