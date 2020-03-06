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
//  1 
(function() {
let Question = function (question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

//  2
var question1 = new Question("Which is the largest country in the world?", ["0. China","1. Russia","2. Brazil","3. America"], 1);
var question2 = new Question("Which is the biggest animal in the world?", ["0. Elephant","1. Hippo","2. Blue Whale","3. Shark"], 2);

// 3
var questionArray = [question1, question2];

//4
Question.prototype.printQuestion = function(){
    console.log(this.question)
    for(let i in this.answers){
        console.log(this.answers[i])
    }
}
let numberOfQuestion = Math.floor(Math.random() * 2);
questionArray[numberOfQuestion].printQuestion();

//5 - 6
Question.prototype.checkCorrectAnswer = function(answerOfUser){
    if(answerOfUser == this.correctAnswer){
        console.log ("Correct answer !!!");
    }
    else{
        console.log ("Incorrect answer !!!")
    }
}
var answerOfUser = prompt("Please enter your answer");
questionArray[numberOfQuestion].checkCorrectAnswer(answerOfUser);

})();






