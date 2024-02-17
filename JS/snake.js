let id = null;
let score = 0;
let isColliding = false;

function move(direction) {
  clearInterval(id);
  id = setInterval(frame, 10); // Adjusted speed
  
  const container = document.getElementById("container");
  var animate = document.getElementById("animate"); 
  var elem = animate.querySelector("img"); 
  const blueBox = document.getElementById("blueBox");
  
  let posTop = parseInt(elem.style.top) || 0;
  let posLeft = parseInt(elem.style.left) || 0;
  let blueTop = parseInt(blueBox.style.top) || 0;
  let blueLeft = parseInt(blueBox.style.left) || 0;
  
  function frame() {
    switch (direction) {
      case 'up':
        if (posTop > 0) {
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
    
    // Check for collision with blue box with some tolerance
    if (!isColliding && posTop + elem.clientHeight >= blueTop && posTop <= blueTop + blueBox.clientHeight &&
        posLeft + elem.clientWidth >= blueLeft && posLeft <= blueLeft + blueBox.clientWidth) {
      isColliding = true;
      score++;
      document.getElementById("scoreValue").innerText = score;
      blueBox.style.display = "none";
      setTimeout(() => {
      showBlueBox()
        setTimeout(() => {
          isColliding = false;
        }, 100); 
      }, 1500);
    }
  }
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max) + 'px';
}

function showBlueBox() {
  const blueBox = document.getElementById("blueBox");
  blueBox.style.display = "block";
  blueBox.style.top = getRandomPosition(container.clientHeight - blueBox.clientHeight);
  blueBox.style.left = getRandomPosition(container.clientWidth - blueBox.clientWidth);
}

// Show blue box and start game
showBlueBox();
move('right'); // Start moving the red box

// Show blue box every 10 seconds
setInterval(showBlueBox, 10000);
