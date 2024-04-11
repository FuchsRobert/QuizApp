let questions = [
    {
        "question": "Welches dieser Spiele gehört zum Battle Royale-Genre?",
        "answer1": "Super Mario Bros.",
        "answer2": "Fortnite",
        "answer3": "The Legend of Zelda",
        "answer4": "Pac-Man",
        "correct_answer": 2
    },
    {
        "question": "Welche Gaming-Plattform wird oft für Indie-Spiele bevorzugt?",
        "answer1": "Xbox",
        "answer2": "PlayStation",
        "answer3": "Steam",
        "answer4": "Nintendo Switch",
        "correct_answer": 3
    },
    {
        "question": "Wer ist der Entwickler des Spiels 'Minecraft'?",
        "answer1": "Mojang Studios",
        "answer2": "Blizzard Entertainment",
        "answer3": "Electronic Arts",
        "answer4": "Ubisoft",
        "correct_answer": 1
    },
    {
        "question": "Welches ist das meistverkaufte Videospiel aller Zeiten?",
        "answer1": "Grand Theft Auto V",
        "answer2": "Tetris",
        "answer3": "Minecraft",
        "answer4": "The Legend of Zelda: Breath of the Wild",
        "correct_answer": 2
    },
    {
        "question": "Welcher der folgenden Charaktere stammt aus der 'Cyberpunk 2077'-Reihe?",
        "answer1": "V",
        "answer2": "Ezio Auditore",
        "answer3": "Nathan Drake",
        "answer4": "Lara Croft",
        "correct_answer": 1
    }
]


let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {
    let question = questions[currentQuestion];

    document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
}
}


function showEndScreen() {
    document.getElementById('screen').innerHTML = `
    <div class="endScreen">
    <img class="imageEndScreen mb-2" src="./img/brainResult.png" alt="Ergebnis">
    <span class="completedText"><b>You've completed the Quiz!</b></span>
    <span class="scoreText"><b>Your Score: -/5</b></span>
    <button class="btn btn-primary mb-2 buttonStyle">Share</button>
    <a class="endScreenLink" href="quiz-games.html">Replay</a>
    </div>
    <div class="trophy">
    <img class="trophyEndScreen mb-2" src="./img/trophy.png" alt="Trophäe">
    </div>
`;
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfCorrectAnswer = `answer_${question['correct_answer']}`;

    if (selectedQuestionNumber == question['correct_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfCorrectAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('nextButton').disabled = false;
}


function showNextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;

    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}