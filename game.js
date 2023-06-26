document.getElementById("demarrer").addEventListener("click", startQuiz);
var questionIndex = 0;

function startQuiz() {
    // Remove everything inside divGame
    document.getElementById("divGame").innerHTML = "";

    fetch("https://batman-api.sayna.space/questions")
        .then(response => response.json())
        .then(data => {
            // Retrieve the questions from the API response
            var questions = data;

            // Start with the first question

            // Display the current question
            displayQuestion(questions[questionIndex], questions);
        })
        .catch(error => {
            console.error("Error fetching questions:", error);
        });
}

function displayQuestion(question, questions) {
    var quizContainer = document.getElementById("divGame");

    var questionNumber = questionIndex + 1;
    var questionText = question.question;
    var answers = question.response;

    var questionHeading = document.createElement("h1");
    questionHeading.textContent = "Question " + questionNumber;
    quizContainer.appendChild(questionHeading);

    var questionParagraph = document.createElement("p");
    questionParagraph.textContent = questionText;
    quizContainer.appendChild(questionParagraph);

    answers.forEach(function (answer) {
        var answerCheckbox = document.createElement("input");
        answerCheckbox.type = "checkbox";
        answerCheckbox.value = answer.text;
        quizContainer.appendChild(answerCheckbox);

        var answerLabel = document.createElement("label");
        answerLabel.textContent = answer.text;
        quizContainer.appendChild(answerLabel);

        var lineBreak = document.createElement("br");
        quizContainer.appendChild(lineBreak);
    });

    var nextQuestionButton = document.createElement("button");
    nextQuestionButton.textContent = "Next Question";
    quizContainer.appendChild(nextQuestionButton);
    nextQuestionButton.addEventListener("click", function () {
        questionIndex++;

        // Check if there are more questions
        if (questionIndex < questions.length) {
            // Clear the current question
            quizContainer.innerHTML = "";

            // Display the next question
            displayQuestion(questions[questionIndex], questions);
        } else {
            // All questions have been answered
            quizContainer.innerHTML = "Quiz completed!"; // Modify this to display the final result or perform other actions
        }
    });
}
