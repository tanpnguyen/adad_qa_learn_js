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

// let miKeTeamScore = [89, 120, 103]
// let johnTeamScore = [116, 94, 123]

// let arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

// let teamWinMessage = (arrAvg(miKeTeamScore) > arrAvg(johnTeamScore)) ? 'Mike\'s team win' : (arrAvg(miKeTeamScore) < arrAvg(johnTeamScore)) ? 'John\'s team win' : 'Two teams are equal'


// console.log(teamWinMessage)


// let maryTeamScore = [116, 94, 123]

// let maxAvg = arr => Math.max(...arr);

// let maxResult = maxAvg([arrAvg(miKeTeamScore), arrAvg(johnTeamScore), arrAvg(maryTeamScore)])


// let teamMaxAvgMessage = (maxResult === arrAvg(miKeTeamScore) && maxResult === arrAvg(johnTeamScore) && maxResult != arrAvg(maryTeamScore)) ? 'Mike\'s and John\'s team win'
//     : (maxResult === arrAvg(miKeTeamScore) && maxResult === arrAvg(maryTeamScore) && maxResult != arrAvg(johnTeamScore)) ? 'Mike\'s and Marry\'s team win'
//         : (maxResult === arrAvg(maryTeamScore) && maxResult === arrAvg(johnTeamScore) && maxResult != arrAvg(miKeTeamScore)) ? 'Marry\'s and John\'s team win'
//             : (maxResult == arrAvg(miKeTeamScore) && maxResult != arrAvg(johnTeamScore) && maxResult != arrAvg(maryTeamScore)) ? 'Mike\'s team win'
//                 : (maxResult === arrAvg(johnTeamScore) && maxResult != arrAvg(miKeTeamScore) && maxResult != arrAvg(maryTeamScore)) ? 'John\'s team win'
//                     : (maxResult === arrAvg(maryTeamScore) && maxResult != arrAvg(miKeTeamScore) && maxResult != arrAvg(johnTeamScore)) ? 'Marry\'s team win'
//                         : 'Three teams are equal'

// console.log(teamMaxAvgMessage)

/* Solution 2*/

var players = [
    {
        "name": "Mike",
        "score": [89, 120, 103]
    },
    {
        "name": "John",
        "score": [89, 120, 103]
    },
    {
        "name": "Marry",
        "score": [89, 120, 103]
    }
]

var arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

var max = 0
var temp =[]
var winTeam = []

players.forEach((obj) => {
    if (arrAvg(obj.score) >= max) {
        max = arrAvg(obj.score);
        temp = obj.score
    }
})
console.log(temp)
var winTeam = players.filter(function (el) {
    return _.isEqual(el.score.sort(), temp.sort())
});


winTeam.forEach((el) => { console.log(el) })
