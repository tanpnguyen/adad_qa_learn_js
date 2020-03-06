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



//Using IIFE
(() => {
    var arrQuiz = [];
    //Define a function contructor named quizSample
    var quizSample = function (question, objQuizOPtions, objAnswer) {
        this.question = question;
        this.objQuizOPtions = objQuizOPtions;
        this.objAnswer = objAnswer;
    }

    //Add method to object named formatQuizOptions
    quizSample.prototype.formatQuizOptions = function () {
        let str = "";
        for (let [key, value] of Object.entries(this.objQuizOPtions)) {
            str += `${key}` + ". " + `${value} \n`
        }
        return str;
    }

    //Write a method to get the random element in object
    var randomContent = function (arrQuiz) {
        return arrQuiz[Math.floor(Math.random() * arrQuiz.length)];
    }

    // Add method to object displayQuestion 
    quizSample.prototype.displayQuestion = () => {
        console.log(quizRandom.question);
        console.log(quizRandom.formatQuizOptions());
    }

    // Add method to object checkAnswer 
    quizSample.prototype.checkAnswer = (answer) => {
        var result = false
        if (this.objAnswer == answer) {
            console.log("Anwser is correct !")
            result = true
        }
        else{
            console.log("Please try again !")
        }

        return result
    }

    //Initialize 3 questions
    var quizContent01 = new quizSample('Who invented JavaScript?',
        { A: 'Douglas Crockford', B: 'Sheryl Sandberg', C: 'Brendan Eich' },
        'C')
    var quizContent02 = new quizSample('Which one of these is a JavaScript package manager?', { A: 'Node.js', B: 'TypeScript', C: 'npm' }, 'C')
    var quizContent03 = new quizSample('Which tool can you use to ensure code quality?', { A: 'ESLint', B: 'jQuery', C: 'Angular' }, 'A')

    //Create an array to store 3 question objects
    var quizzes = [quizContent01, quizContent02, quizContent03]

    //Call random function to return a questions
    let quizRandom = new randomContent(quizzes);

    //Display question
    quizRandom.displayQuestion()
    //Promt to get user's answer
    var answer = prompt("Please select one answer!", "");
    //Checkanwser
    quizRandom.checkAnswer(answer)

})();




