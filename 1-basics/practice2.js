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

let scoreOfJohn = [89, 120, 103];
let scoreOfMike = [116, 94, 123];

function calculate(array) {
  	var sum = 0;
  	var count = array.length;
	if (array.length == 0) 
		return 0;
  	for (var i = 0; i < count; i++) {
    		sum = sum + array[i];
  	}
  	return sum / count;
}

var averageScoreOfJohn = calculate(scoreOfJohn);
var averageScoreOfMike = calculate(scoreOfMike);

console.log("Question 1");
console.log("Average score of John's team: " + averageScoreOfJohn);
console.log("Average score of Mike's team: " + averageScoreOfMike);

console.log("Question 2, 3");
if (averageScoreOfJohn > averageScoreOfMike) {
	console.log("The winner team is John's team. Average score of John's team: " + averageScoreOfJohn);
}
else if (averageScoreOfJohn < averageScoreOfMike) {
	console.log("The winner team is Mike's team. Average score of Mike's team: " + averageScoreOfMike);
}
else {
	console.log("2 teams has equal average score.");
}

let scoreOfMary = [97, 134, 105];
var averageScoreOfMary = calculate(scoreOfMary);

console.log("Question 4, 5");
console.log("Average score of Mary's team: " + averageScoreOfMary);

if (averageScoreOfJohn > averageScoreOfMike) {
	if (averageScoreOfJohn > averageScoreOfMary) {
		console.log("The winner team is John's team. Average score of John's team: " + averageScoreOfJohn);
	}
	else if (averageScoreOfJohn < averageScoreOfMary) {
		console.log("The winner team is Mary's team. Average score of Mary's team: " + averageScoreOfMary);
	}
	else if (averageScoreOfJohn == averageScoreOfMary) {
		console.log("The winner teams are John's team & Mary's team. Average score of 2 teams: " + averageScoreOfJohn);
	}
}
else if (averageScoreOfJohn < averageScoreOfMike) {
	if (averageScoreOfMike > averageScoreOfMary) {
		console.log("The winner team is Mike's team. Average score of Mike's team: " + averageScoreOfMike);
	}
	else if (averageScoreOfMike < averageScoreOfMary) {
		console.log("The winner team is Mary's team. Average score of Mary's team: " + averageScoreOfMary);
	}
	else if (averageScoreOfMike == averageScoreOfMary) {
		console.log("The winner teams are Mike's team & Mary's team. Average score of 2 teams: " + averageScoreOfMike);
	}

}
else if (averageScoreOfJohn == averageScoreOfMike) {
	if (averageScoreOfJohn > averageScoreOfMary) {
		console.log("The winner teams are John's team & Mike's team. Average score of 2 teams: " + averageScoreOfJohn);
	}
	else if (averageScoreOfJohn < averageScoreOfMary) {
		console.log("The winner team is Mary's team. Average score of Mary's team: " + averageScoreOfMary);
	}
	else if (averageScoreOfJohn == averageScoreOfMary) {
		console.log("The all teams has equal score. Average score of all teams: " + averageScoreOfJohn);
	}
}