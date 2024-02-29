let id = null; //interval id for movement of red box
let score = 0;
let isColliding = false;

function move(direction) { //moves red box to a certain direction
  clearInterval(id); //one interval at a time- cancels the 10 msecond interval
  id = setInterval(frame, 10); // sets a new interval-Adjusted speed
  
  const container = document.getElementById("container");
  var animate = document.getElementById("animate"); 
  var elem = animate.querySelector("img"); 
  const blueBox = document.getElementById("blueBox");
  
  let posTop = parseInt(elem.style.top) || 0;
  let posLeft = parseInt(elem.style.left) || 0;
  let blueTop = parseInt(blueBox.style.top) || 0;
  let blueLeft = parseInt(blueBox.style.left) || 0;
  
  function frame() { //updates position of fish
    switch (direction) {
      case 'up':
        if (posTop > 0) { //in boundary of container
          posTop--;
          elem.style.top = posTop + "px"; 
        }
        break;
      case 'down':
        if (posTop < container.clientHeight - elem.clientHeight) {
          posTop++;
          elem.style.top = posTop + "px"; 
        }
        break;
      case 'left':
        if (posLeft > 0) {
          posLeft--;
          elem.style.left = posLeft + "px"; 
        }
        break;
      case 'right':
        if (posLeft < container.clientWidth - elem.clientWidth) {
          posLeft++;
          elem.style.left = posLeft + "px"; 
        }
        break;
      default:
        break;
    }
    
    // Check for collision with blue box 
    if (!isColliding && posTop + elem.clientHeight >= blueTop && posTop <= blueTop + blueBox.clientHeight &&
        posLeft + elem.clientWidth >= blueLeft && posLeft <= blueLeft + blueBox.clientWidth) { //bottom of fish passes top of blue box, top passes bottom, etc
      isColliding = true;
      score++;
      document.getElementById("scoreValue").innerText = score;
      blueBox.style.display = "none";
      setTimeout(() => { //show blue box after 1.5 secs
      showBlueBox()
        setTimeout(() => {
          isColliding = false; //reseting again to give time to detect collision
        }, 1500); 
      }, 1500);
    }
  }
}

function getRandomPosition(max) {  //returns a random (number)position betwen 0 and max
  return Math.floor(Math.random() * max) + 'px';
}

function showBlueBox() { //shows blue box at random position
  const blueBox = document.getElementById("blueBox");
  blueBox.style.display = "block";
  blueBox.style.top = getRandomPosition(container.clientHeight - blueBox.clientHeight);//random position within the vertical range of the container
  blueBox.style.left = getRandomPosition(container.clientWidth - blueBox.clientWidth);
}



//The beginning of the game
showBlueBox();// Show blue box and start game
move('right'); // Start moving the red box
setInterval(showBlueBox, 10000);// Show blue box every 10 seconds

