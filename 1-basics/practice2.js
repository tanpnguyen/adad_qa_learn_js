/*****************************
* PRACTICE 1
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console.
 HINT: you will need the && operator to take the decision. 
 If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/
var arrAverageScore = [];
var arrTeamName = [];

function promtScore(teamName, score1, score2, score3){
    let lstSample = score1 + ", " + score2 + ", " + score3;
    let scoreList = prompt("Enter three latest score of " + teamName + "'s team", lstSample);
    let averageScore = calAverageScore(scoreList);
    arrAverageScore.push(averageScore);
    arrTeamName.push(teamName);
    let str = "The average score of " + teamName + "'s team is " + averageScore
    console.log(str);
    alert(str);
}

function calAverageScore(scoreList){
    let arr = scoreList.split(",");
    let sumScore = 0;
    let sumCount = 0;
    if(arr.length == 0){
        return 0;
    }else{
        for (let i = 0; i < arr.length; i++) {
            sumScore += Number(arr[i]);
            sumCount += 1;   
        }
    }
    if(sumScore >= 0){
        return sumScore/sumCount;
    }
}

function compareAverageScore(averList, arrName){
    let strResult = ""
    let maxNumber = 0;
    if(averList.length == 0){
        strResult = "There is no winner!";
    }else{
        maxNumber = Number(averList[0]);
        teamName = arrName[0]
        for (let i = 0; i < averList.length; i++) {
            if(averList[i] > maxNumber){
                maxNumber = Number(averList[i]);
                teamName = arrName[i];
            }
        }

        strResult = "The winner is " + teamName + "'s team! And the winner's score is " + maxNumber + ".";
    }
    return strResult;
}

function getListScore(arr){
    let str = ""
    if(arr.length == 0){
        return str
    }else{
        for (let i = 0; i < arr.length; i++) {
            if(!isNaN(arr[i])){
                if(i == arr.length-1){
                    str += arr[i]
                }else{
                    str += arr[i] + ", ";
                } 
            }
        }
        return str;
    }
}

promtScore("Mike", 89, 120, 103);
promtScore("John", 116, 94, 123);

var finalResult = compareAverageScore(arrAverageScore, arrTeamName);
console.log(finalResult);
alert(finalResult);

let calAgain = confirm("Do you want to calculate who is the winner again?");
if(calAgain){
    arrAverageScore = [];
    arrTeamName = [];
    promtScore("Mike", 89, 120, 103);
    promtScore("John", 116, 94, 123);
    finalResult = compareAverageScore(arrAverageScore, arrTeamName);
    console.log(finalResult);
    alert(finalResult);
}

calAgain = confirm("Do you want to calculate with one more team and who is the winner again?");
if(calAgain){
    arrAverageScore = [];
    arrTeamName = [];
    promtScore("Mike", 89, 120, 103);
    promtScore("John", 116, 94, 123);
    promtScore("Mary", 97, 134, 105);
    finalResult = compareAverageScore(arrAverageScore, arrTeamName);
    console.log(finalResult);
    alert(finalResult);
}





