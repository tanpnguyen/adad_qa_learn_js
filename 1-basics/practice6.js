/*****************************
* PRACTICE 6
*/

/*
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers 
(each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).
*/

var arrQuiz = [];

var quizSample = function(){
    this.question = '';
    this.objQuizOPtions = {A: '', B: '', C: ''};
    this.objAnswer = '';
    quizSample.prototype.formatQuizOptions = function(){
        let str = "";
        for (let [key, value] of Object.entries(this.objQuizOPtions)) {
            str += `${key}` + ". " + `${value} \n`
        }
        return str;
    }
}

var quizContent01 = new quizSample();
quizContent01.question = 'Who invented JavaScript?';
quizContent01.objQuizOPtions.A = 'Douglas Crockford';
quizContent01.objQuizOPtions.B = 'Sheryl Sandberg';
quizContent01.objQuizOPtions.C = 'Brendan Eich';
quizContent01.answer = 'C';
arrQuiz.push(quizContent01);

var quizContent02 = new quizSample();
quizContent02.question = 'Which one of these is a JavaScript package manager?';
quizContent02.objQuizOPtions.A = 'Node.js';
quizContent02.objQuizOPtions.B = 'TypeScript';
quizContent02.objQuizOPtions.C = 'npm';
quizContent02.answer = 'C';
arrQuiz.push(quizContent02);

var quizContent03 = new quizSample();
quizContent03.question = 'Which tool can you use to ensure code quality?';
quizContent03.objQuizOPtions.A = 'ESLint';
quizContent03.objQuizOPtions.B = 'jQuery';
quizContent03.objQuizOPtions.C = 'Angular';
quizContent03.answer = 'A';
arrQuiz.push(quizContent03);

let quizRandom = arrQuiz[Math.floor(Math.random() * arrQuiz.length)];
console.log(quizRandom.question);
console.log(quizRandom.formatQuizOptions());
let quizRandomAnswer = prompt("Please select one answer!", "");
if(quizRandomAnswer == quizRandom.answer){
    console.log("Correct answer!");
}else{
    console.log("Incorrect answer!");
}

/* (function () {
    statements
})(); */

(function(){
    let iConfirm = confirm("Do you want to answer another question?");
    if(iConfirm){
        let quizRandom = arrQuiz[Math.floor(Math.random() * arrQuiz.length)];
        console.log(quizRandom.question);
        console.log(quizRandom.formatQuizOptions());
        let quizRandomAnswer = prompt("Please select one answer!", "");
        if(quizRandomAnswer == quizRandom.answer){
            console.log("Correct answer!");
        }else{
            console.log("Incorrect answer!");
        }
    }
})();



