

function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // prevents from stayimg in the same page
  
      // Get the value entered in the search input
      var searchTerm = document.getElementById("searchInput").value.trim();
    
      // Perform a simple search for the game (replace spaces with hyphens for simplicity)
      var gameUrl = "/HTML/" + searchTerm.toLowerCase() + ".html";
  
      // Redirect to the URL containing the game
      window.location.href = gameUrl;
      document.getElementById("searchInput").value = ""; //to clear the search when returning to home

    }
  }

  function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

  
  function logoutUser() {
    eraseCookie('name');
    eraseCookie('pw');
    localStorage.removeItem('name');
    localStorage.removeItem('pw');
    alert("You have been logged out, Goodbye!");
}