const canvasColor = "#005cb4";
const bubbleColor = "#3c3024";
const bubbleNumber = 300;
const bubbleSizeModifier = 0.005;
const bubbleSpeedModifier = 0.05;

// Get Canvas Element
var canvas = document.getElementById("canvas");

// Get Canvas Sizes 
var canvasWidth = canvas.getBoundingClientRect().width;
var canvasHeight = canvas.getBoundingClientRect().height;

// Output Canvas Sizes
console.log("Canvas width: " + canvasWidth);
console.log("Canvas height: " + canvasHeight);

// Get Canvas Context
var context = canvas.getContext("2d");

// Bubbles Array
var bubbles = [];

// Bubble Speed 
var bubbleSpeed = canvasHeight * bubbleSpeedModifier;

// Bubble Velocities
var velocityX = 0;
var velocityY = bubbleSpeed;

// Bubble Creating Loop
for(let i = 0; i < bubbleNumber; i++) {

    bubbles[i] = {
        r: Math.random() * bubbleSizeModifier * canvasWidth / 2, // Radius
        x: Math.floor(Math.random() * canvasWidth), // Horizontal Starting Point
        y: Math.floor(Math.random() * canvasHeight), // Vertical Starting Point
        xv: velocityX, // Horizontal Velocity
        yv: velocityY // Vertival Velocity
    }
}

console.log(bubbles[1]);

// Time Variables
var timeDelta, timeLast = 0;

// Begin Animation
requestAnimationFrame(loop);

// Animation Function
function loop(timeNow) {
    // Calculate Elapsed Time
    timeDelta = timeNow - timeLast;
    timeLast = timeNow; // Set Checkpoint To Current Time

    // Draw Canvas Background
    context.fillStyle = canvasColor;
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    // Bubble Color
    context.fillStyle = bubbleColor;
    
    // Draw Each Bubble
    for(let i = 0; i < bubbleNumber; i++) {
        context.beginPath();
        context.arc(bubbles[i].x, bubbles[i].y, bubbles[i].r, 0, Math.PI * 2); // Bubble Position & Dimensions
        context.fill();

        // Update Position
        bubbles[i].y -= bubbles[i].yv * timeDelta * 0.001;

        // Adjust Position If Outside FOV
        if(bubbles[i].y > canvasHeight) {
            console.log("Condition IF Executed!");
            // If Above FOV, Set Position To Bottom Of FOV
            bubbles[i].y = 0;
            bubbles[i].x = Math.floor(Math.random() * canvasWidth);
        }else if(bubbles[i].y < 0) {
            console.log("Condition Else Executed!");
            // If Below FOV, Set Position To Top Of FOV
            bubbles[i].y = canvasHeight;
            bubbles[i].x = Math.floor(Math.random() * canvasWidth);
        }
    }
    // Repeat Animation
    requestAnimationFrame(loop);
}