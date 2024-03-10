// Quiz object
let quiz = {
    questions: [
        {
            question: "What is the capital of France?",
            choices: ["London", "Paris", "Berlin", "Rome"],
            correctAnswer: 1
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            choices: ["J.K. Rowling", "Harper Lee", "Stephen King", "George Orwell"],
            correctAnswer: 1
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["H2O", "CO2", "NaCl", "O2"],
            correctAnswer: 0
        }
    ],
    score: 0,
    totalQuestions: 0,
    displayQuestion: function() {
        let randomIndex = Math.floor(Math.random() * this.questions.length);
        let question = this.questions[randomIndex];
        console.log(question.question);
        question.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });
        return randomIndex;
    },
    checkAnswer: function(index, answer) {
        if (answer === this.questions[index].correctAnswer + 1) {
            console.log("Correct!");
            this.score++;
        } else {
            console.log("Incorrect.");
        }
        this.totalQuestions++;
    },
    displayScore: function() {
        console.log(`\nYour final score is: ${this.score}/${this.totalQuestions}`);
    }
};
console.log("Welcome to the Quiz Game!\n");
for (let i = 0; i < 3; i++) { 
    console.log(`Question ${i + 1}:`);
    let index = quiz.displayQuestion();
    let userAnswer = parseInt(prompt("Enter your answer (1, 2, 3, or 4):"));
    quiz.checkAnswer(index, userAnswer);
}
quiz.displayScore();
