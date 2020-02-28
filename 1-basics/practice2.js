/*****************************
* PRACTICE 1
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/
function getAverageScore (scoreArray)
{
    let sumScore = 0;
    for( let i in scoreArray){
        sumScore += scoreArray[i];
    }
    return sumScore/scoreArray.length;

}

let teamOfJohn = new Object();
teamOfJohn = {
    name: "John",
    score: [89,120,103],
    averageScore : getAverageScore([89,120,103]),
    isTheWinTeam : false
}

let teamOfMike = new Object();
teamOfMike = {
    name: "Mike",
    score: [116,94,123],
    averageScore : getAverageScore([116,94,123]),
    isTheWinTeam : false
}

//1
console.log("--1--")
console.log("The average score of John's team is " + getAverageScore(teamOfJohn.score));
console.log("The average score of Mike's team is " + getAverageScore(teamOfMike.score));
//2
let teamArray = [teamOfJohn, teamOfMike];
function getWinnerTeam(teamArray){
    //set the fisrt team is the winner
    let winTeam = 0;
    teamArray[winTeam].isTheWinTeam = true;
    for(let i in teamArray){
        //if the team has the same average score with the win team, the team is the winner too
        if(teamArray[i].averageScore == teamArray[winTeam].averageScore){
            teamArray[i].isTheWinTeam = true;
        }
        //if the team has lower average score than the win team, set isTheWinTeam = false
        if(teamArray[i].averageScore < teamArray[winTeam].averageScore){
            teamArray[i].isTheWinTeam = false;
        }
        //if the team has higher avarage score, the team will be the win team, set isTheWinTeam = false for other teams 
        if(teamArray[i].averageScore > teamArray[winTeam].averageScore){
            teamArray[i].isTheWinTeam = true;
            winTeam = i;
            for(let j = 0; j < i; j++){
                teamArray[j].isTheWinTeam = false;
            }
        }
        
    }
    let result = new Array;
    for(let i in teamArray){
        if (teamArray[i].isTheWinTeam == true){
            result.push(i);
        }
    }

    return result;
}
function printTheWinTeam(teamArray){
    let winTeamArray = getWinnerTeam(teamArray);
    let nameOfWinTeam = '';
    let count = 0;
    for(i in winTeamArray){
        if(teamArray[winTeamArray[i]].isTheWinTeam == true){
            if (count > 0){
                nameOfWinTeam = nameOfWinTeam + ", ";
            }
            nameOfWinTeam = nameOfWinTeam + teamArray[winTeamArray[i]].name;
            count++;
        }

    }
    console.log("The win team(s) is(are) team of: " + nameOfWinTeam + ". With the average score: " + teamArray[winTeamArray[0]].averageScore )
}
console.log("--2--");
printTheWinTeam(teamArray);
//3
teamOfJohn.score = [112,112,112];
teamOfJohn.averageScore = getAverageScore([112,112,112]);
console.log("--3--");
console.log("After change the scores of John's team, the result is");
printTheWinTeam(teamArray);

//4
let teamOfMary = new Object;
teamOfMary = {
    name: "Mary",
    score: [97, 134, 105],
    averageScore : getAverageScore([97, 134, 105]),
    isTheWinTeam : false
}
teamArray.push(teamOfMary);
console.log("--4--");
console.log("After add Mary's team, the result is:")
printTheWinTeam(teamArray);

//5
teamOfMary.score = [115,112,112];
teamOfMary.averageScore = getAverageScore([115,112,112]);
console.log("--5--");
console.log("After change the scores of Mary's team, the result is");
printTheWinTeam(teamArray);

