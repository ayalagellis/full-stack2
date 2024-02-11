

function handleKeyPress(event) {
    if (event.key === "Enter") {
      // Prevent the default behavior of form submission
      event.preventDefault();
  
      // Get the value entered in the search input
      var searchTerm = document.getElementById("searchInput").value.trim();
    
      // Perform a simple search for the game (replace spaces with hyphens for simplicity)
      var gameUrl = "/HTML/" + searchTerm.toLowerCase().replace(/\s+/g, "-") + ".html";
  
      // Redirect to the URL containing the game
      window.location.href = gameUrl;
      document.getElementById("searchInput").value = ""; //to clear the search when returning to home

    }
  }
  