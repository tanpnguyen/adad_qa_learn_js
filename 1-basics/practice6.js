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

// 1. Create Function Constructor called 'question'
(function () {
  question = function (questionName, questionAnswers, correctAnswer) {
        this.questionName = questionName,
        this.questionAnswers = questionAnswers,
        this.correctAnswer = correctAnswer
    }

// 2. Define Answer arrays
    let answerListOfQuestion1 = [];
    let answerListOfQuestion2 = [];
    let answerListOfQuestion3 = [];

    var answersOfQuestion1 = ["option 1", "option 2", "option 3", "option 4"];
    var answersOfQuestion2 = ["Answer 1", "Answer 2"];
    var answersOfQuestion3 = ["Lorem ipsum dolor sit amet", "This's the second answer of question 3", "This is the last answer of question 3"];
    answerListOfQuestion1.push(...answersOfQuestion1);
    answerListOfQuestion2.push(...answersOfQuestion2);
    answerListOfQuestion3.push(...answersOfQuestion3);

    // Define Questions
    var question1 = new question("Question 1", answerListOfQuestion1, 0);
    var question2 = new question("Question 2", answerListOfQuestion2, 1);
    var question3 = new question("Question 3", answerListOfQuestion3, 2);

// 3. Store questions to an array
    var questionList = [question1, question2, question3];

// 4. Method to print random question to console
    //set index question
    var indexQuestion = Math.floor(Math.random() * questionList.length);
    // Function to display question
    question.prototype.printQuestion = function (){
        console.log(this.questionName + ". Please select one answer below:\n");
        for (var i = 0; i < this.questionAnswers.length; i++){
            console.log("  " + i + ". " + this.questionAnswers[i] + "\n");
        }
    }
    // Print Question to console
    questionList[indexQuestion].printQuestion();
   

// 5. Ask user to provide an answer based on the number of answers shown - using Promt
    var answerNo = (prompt("Please enter the number of the answer you think it's correct:")).trim();
        
// 6. Check if the user answers the question correct, print to the console the result
    
    question.prototype.printResult = function (){
       if (questionList[indexQuestion].correctAnswer == (answerNo*1)){
           console.log("\nYou entered " + answerNo + ". Your answer is correct.");
       } else {
           console.log("\n You entered " + answerNo + ". It's incorrect");
       }
    };
    questionList[indexQuestion].printResult();
})();









