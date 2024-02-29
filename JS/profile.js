var scores=[];
  function saveScore(game, score) {

    scores[game] = scores[game] || [];
    scores[game].push(score);

}

 function calculateAverageScore(gameScores) {
    if (!gameScores || gameScores.length === 0) {
        return 0;
    }
    var sum = gameScores.reduce((acc, curr) => acc + curr, 0);
    return sum / gameScores.length;
}

function displayAverageScores() {
    var games = ['scramble', 'snake']; 
    var averageScoresList = document.getElementById('average-scores');
    games.forEach(function(game) {
        var averageScore = calculateAverageScore(scores[game] || []);
        var listItem = document.createElement('li');
        listItem.textContent = game + ': ' + averageScore; 
        averageScoresList.appendChild(listItem);
    });
}

function greet(){
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let storedName = localStorage.getItem('name');
    let greetingMessage = "";

    if (currentHour < 12) {
        greetingMessage = "morning";
    } else if (currentHour < 18) {
        greetingMessage = "afternoon";
    } else {
        greetingMessage = "evening";
    }
    var greetingElement = document.getElementById("greeting");
    if (storedName) {
        greetingElement.textContent = `Good ${greetingMessage}, ${storedName}!`;
    } else {
        greetingElement.textContent = greetingMessage;
    }

}

// Call the function when the page loads
window.onload = function() {
    displayAverageScores();
    greet();
};

module.export={saveScore}


