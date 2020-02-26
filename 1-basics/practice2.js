/*****************************
* PRACTICE 1
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

function calAverage(scores)
{
	if (scores.length == 0)
		return 0;
	
	let total = 0;
	for(let i=0; i<scores.length; i++)
	{
		total += scores[i];
	}
	
	return total/scores.length;
}

function maxAverageScore(arrScores)
{
	if (arrScores.length == 0)
		return -1;
	
	let maxAverage = calAverage(arrScores[0]);
	
	for(let i=1; i<arrScores.length; i++)
	{
		let average = calAverage(arrScores[i]);
		
		if (average > maxAverage)
			maxAverage = average;
	}
	return maxAverage;
}

let scoresOfJohn = [89, 120, 103];
let scoreOfMike = [89, 120, 103]; //[116, 94, 123];
let averageOfMike = calAverage(scoreOfMike);
let averageOfJohn = calAverage(scoresOfJohn);

console.log('Average score of Mike: ' + averageOfMike);
console.log('Average score of John: ' + averageOfJohn);

let message = (averageOfMike > averageOfJohn) ? ('The winner is Mike\'s team: ' + averageOfMike) : 
			(averageOfJohn > averageOfMike) ? ('The winner is John\'s team: ' + averageOfJohn):
			'Two teams have same score';
console.log(message);

let scoreOfMary = [97, 134, 105];
let averageOfMary = calAverage(scoreOfMary);
console.log('Average score of Mary: ' + averageOfMary);

let maxAvg = maxAverageScore([scoresOfJohn, scoreOfMike, scoreOfMary]);
console.log('Max score: ' + maxAvg);

let winnerMsg = (scoresOfJohn == maxAvg) ? 'John\'s team is winner' : 
		(scoreOfMike == maxAvg) ? 'Mike\'s team is winner' :
		'Mary\'s team is winner' ;
		
console.log(winnerMsg);



