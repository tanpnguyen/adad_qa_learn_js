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

//This function is to calculate the average score of each team.
var p1, p2, p3;
function averageScore (p1, p2, p3){
	var num;
	// This function is to check if a number is not a number. If it's not, set the number to 0. 
	function verifyPoint (num){
		if(isNaN(num)){
			num = 0;
			return num;
		}
		return num;
	}
	
	var avg =  (verifyPoint(p1) + verifyPoint(p2) + verifyPoint(p3)) / 3;
	
	return avg;
};

var teamJohnAverage = averageScore(89,120,103);
var teamMikeAverage = averageScore(116,94,123);
var teamMaryAverage = averageScore(97,134,105);

//Print out the average score of each team
console.log("Average Score of John's Team: " + teamJohnAverage + "\n Average Score of Mike's team: " + teamMikeAverage + "\n Average Score of Mary's Team: " + teamMaryAverage);

//The following code is to determine which team wins or draws based on the highest average score and equal average scroes.

var arrayScore = [teamJohnAverage, teamMikeAverage, teamMaryAverage];
var teamWinner;
var arrayScoreNum;

//This function is to defined Team Winner. Set all 3 team average scores to an array and then find out the largest number.
// Array Index is to determined which teams. In this case, John team is at index 0; Mike team is at 1; and Mary team is at 2. 

function getTeamWinner(arrayScoreNum) {
  return Math.max.apply(null, arrayScoreNum);
}

teamWinner = (getTeamWinner(arrayScore));

if (teamWinner == arrayScore[0] && teamWinner != arrayScore[1] && teamWinner != arrayScore[2]){
	console.log("John's team is the winner with the Average Score " + teamWinner);
}
 else if (teamWinner == arrayScore[1] && teamWinner != arrayScore[0] && teamWinner !=  arrayScore[2]){
	console.log("Mike's team is the winner with the Average Score " + teamWinner);
}
else if (teamWinner == arrayScore[2] && teamWinner != arrayScore[0] && teamWinner !=  arrayScore[1]){
	console.log("Mary's team is the winner with the Average Score " + teamWinner);
}
else if (teamWinner == arrayScore[0] && teamWinner == arrayScore[1] && teamWinner != arrayScore[2]){
	console.log("John's team & Mike's team are draws but won Marry's Team with the Average Score " + teamWinner);
}
else if (teamWinner == arrayScore[0] && teamWinner == arrayScore[2] && teamWinner != arrayScore[1]){
	console.log("John's team & Marry's team are draws but won Mike's Team with the Average Score " + teamWinner);
}
else if (teamWinner == arrayScore[1] && teamWinner == arrayScore[2]&& teamWinner != arrayScore[0]){
	console.log("Mike's team & Marry's team are draws but won John's Team with the Average Score " + teamWinner);
} 
else {
	console.log("The 3 teams are draws with the Average Score " + teamWinner);
};
