/*****************************
* PRACTICE 6
*/

/*
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

--------------
(function() {
var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question ('How many days in week', ['5', '6', '7'], 2);
var question2 = new Question ('How many weeks in year', ['52', '53', '54'], 0);
var listQuestions = [question1, question2];

Question.prototype.displayQuestion = function() {
	console.log(this.question);
	for (let i = 0; i < this.answers.length; i++) {
        	console.log(i + '. ' + this.answers[i]);
	}
}

Question.prototype.checkCorrectAnswer = function(answer) {
	let message = (answer == this.correctAnswer) ? "Correct answer" : "Incorrect answer";
	console.log(message);
}	      

var random = Math.floor(Math.random() * listQuestions.length);
listQuestions[random].displayQuestion();
listQuestions[random].checkCorrectAnswer(parseInt(prompt('Choose answer')));

})();


