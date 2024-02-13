var scores=[];
export function saveScore(game, score) {

    scores[game] = scores[game] || [];
    scores[game].push(score);

}

export function calculateAverageScore(scores) {
    if (!scores || scores.length === 0) {
        return 0;
    }
    var sum = scores.reduce((acc, curr) => acc + curr, 0);
    return sum / scores.length;
}

function displayAverageScores() {
    var games = ['scramble', 'snake']; // Replace with your game names
    var averageScoresList = document.getElementById('average-scores');
    games.forEach(function(game) {
        var averageScore = calculateAverageScore(game);
        var listItem = document.createElement('li');
        listItem.textContent = game + ': ' + averageScore.toFixed(2); // Round to 2 decimal places
        averageScoresList.appendChild(listItem);
    });
}

// Call the function when the page loads
window.onload = displayAverageScores;

