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

function Question(question, answers, correctAnswer)
{
    this.question = (question === undefined || question === null) ? '' : question;
    this.answers = (answers === undefined || answers === null) ? [] : answers;
    this.correctAnswer = (correctAnswer === undefined || correctAnswer === null) ? '' : correctAnswer;
}

Question.prototype.printQuestion = function(){
    console.log(this.question);

    for(let i=0; i<this.answers.length; i++)
    {
        console.log(this.answers[i] + '\n');
    }
 };

 Question.prototype.checkIsCorrectAnswer = function(choice){
    if (choice === undefined || choice === null || choice.trim() === '')
        return false;
       
    let c = String(choice).trim().toLowerCase();
    return ((c === this.correctAnswer.toLowerCase()) ? true : false);
 }
 
let arrQuestions =[];
let qst1 = new Question('What is the sum of 47.856 and 35.687 ?', ['A. 83433', 'B. 82443', 'C. 83543', 'D. 82543'], 'C');
let qst2 = new Question('The fraction of fractional number two-sixths is represented', ['A. 6/2', 'B. 2/6', 'C. 1/6', 'D. 1'], 'B');
let qst3 = new Question('Fill in the box with an appropriate number in place of the question mark (?). 21−9=3×?', ['A. 4', 'B. 7', 'C. 21', 'D. 11'], 'A');
arrQuestions.push(qst1);
arrQuestions.push(qst2);
arrQuestions.push(qst3);

let randomNum = Math.floor(Math.random() * arrQuestions.length);
console.log(arrQuestions[randomNum].printQuestion());

let choice = prompt('Select correct answer: ');
let result = (arrQuestions[randomNum].checkIsCorrectAnswer(choice)) ? 'The answer is correct' : 'The answer is Not correct';
console.log(result);